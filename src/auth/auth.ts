import * as express from 'express';
import * as passport from 'passport';

export const authenticateLocal = passport.authenticate('local', function(req, res) {
	// If this function gets called, authentication was successful.
	// `req.user` contains the authenticated user.
	res.redirect('/auth/logged-in/?email=' + req.user);
});

// ********* Google OAuth *********
export const requestGoogleToken = passport.authenticate('google', {
	scope: ['profile', 'email'],
	prompt: 'select_account',
});

// callback route after passport authenticates the first time, run a 2nd time with the token
export const authenticateGoogleUser = [
	passport.authenticate('google'),
	(req: express.Request, res: express.Response) => {
		res.redirect('/healthcheck');
		// return true;
	},
];

export function authenticated(req: express.Request, res: express.Response) {
	const { email, token } = req.query;
	const user = {
		email,
		token,
	};
	return res.json(user);
}

export const test = () => {
	return 'testing';
};
