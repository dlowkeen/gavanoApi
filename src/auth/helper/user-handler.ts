import * as passport from 'passport';
import * as GoogleStrategy from 'passport-google-oauth20';
import { googleUserFormatter } from './google-user-formatter';
import { User } from '../../models/user';

export const userHandler = async (
	accessToken: string,
	refreshToken: string,
	profile: passport.Profile,
	done: GoogleStrategy.VerifyCallback,
) => {
	let authUser = null;
	// Select appropriate api for profile provider
	switch (profile.provider) {
		case 'google':
			authUser = googleUserFormatter(profile);
			break;
	}
	// Search for user by authentication ID
	let existingUser = authUser ? await User.findOne({ [authUser.identifier]: profile.id }) : null;

	if (existingUser) {
		console.log('existingUser', existingUser);
		return done(undefined, existingUser);
	}

	// Check to see if user already exists by comparing email addresses
	existingUser = authUser ? await User.findOne({ email: authUser.userModel.email }) : null;

	// If email exists, update user record with new authentication ID
	if (existingUser && authUser) {
		existingUser[authUser.identifier] = authUser.userModel[authUser.identifier];
		existingUser[authUser.profileUrlId] = authUser.userModel[authUser.profileUrlId];

		try {
			existingUser = await existingUser.save();

			return done('user found', existingUser);
		} catch (error) {
			console.log(error);
		}
	}

	// Create a new user record is user does not exist
	const user = authUser && authUser.userModel ? await new User(authUser.userModel).save() : null;
	return done('user created', user);
};
