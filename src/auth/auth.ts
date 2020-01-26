import * as express from 'express';
import * as passport from 'passport';

export const authenticateLocal = passport.authenticate('local', {
	successRedirect: '/healthcheck',
	failureRedirect: '/login',
	failureFlash: true,
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
		console.log('WE MADE IT HERE*****************');
		res.redirect('/healthcheck');
		// return true;
	},
];

export const test = () => {
	return 'testing';
};
