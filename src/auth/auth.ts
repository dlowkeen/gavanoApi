import * as express from 'express';
import * as passport from 'passport';

// ********* Google OAuth *********
export const requestGoogleToken = passport.authenticate('google', {
	scope: ['profile', 'email'],
	prompt: 'select_account',
});

// callback route after passport authenticates the first time, run a 2nd time with the token
export const authenticateGoogleUser = [
	passport.authenticate('google'),
	(req: express.Request, res: express.Response) => res.redirect('/'),
];

export const test = () => {
	return 'testing';
};
