// const mongoose = require("mongoose");
// const keys = require("../config/keys");
// const User = mongoose.model("user");
// const { serialize, deserialize } = require("./utils/serialize");

import * as passport from 'passport';
import * as GoogleStrategy from 'passport-google-oauth20';

const googleStrategy = GoogleStrategy.Strategy;

export const serviceHandler = async (
	accessToken: string,
	refreshToken: string,
	profile: passport.Profile,
	done: GoogleStrategy.VerifyCallback,
) => {
	done('user!');
	// let authUser = null;
	// // Select appropriate api for profile provider
	// switch (profile.provider) {
	// 	case 'google':
	// 		authUser = googleApi.googleUser(profile);
	// 		break;
	// 	case 'linkedin':
	// 		authUser = linkedInApi.linkedInUser(profile);
	// 		break;
	// }
	// // Search for user by authentication ID
	// let existingUser = // await User.findOne({ [authUser.identifier]: profile.id });

	// if (existingUser) {
	// 	return done(null, existingUser);
	// }

	// // Check to see if user already exists by comparing email addresses
	// existingUser = await User.findOne({ email: authUser.userModel.email });

	// // If email exists, update user record with new authentication ID
	// if (existingUser) {
	// 	existingUser[authUser.identifier] = authUser.userModel[authUser.identifier];
	// 	existingUser[authUser.profileUrlId] = authUser.userModel[authUser.profileUrlId];

	// 	try {
	// 		existingUser = await existingUser.save();

	// 		return done(null, existingUser);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	// // Create a new user record is user does not exist
	// const user = await User(authUser.userModel).save();
	// done(null, user);
};

passport.use(
	new googleStrategy(
		{
			clientID: '59785752505-24lhl2afe0bfha3r0ullonb529e0n8fl.apps.googleusercontent.com', // keys.googleClientID,
			clientSecret: 'vwM9pqgOoBkkTF1hxhqg4A8k', // keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			profileFields: ['id', 'name', 'displayName', 'emails', 'image', 'url', 'picture'],
			// proxy: true,
		} as GoogleStrategy.StrategyOptions,
		serviceHandler,
	),
);
