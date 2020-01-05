import * as express from 'express';
import * as passport from 'passport';

export const requestGoogleToken = async (req: express.Request, res: express.Response) => {
	await passport.authenticate('google', { scope: ['profile'] });
};

export const authenticateGoogleUser = (req: express.Request, res: express.Response) => {
	passport.authenticate('google', { failureRedirect: '/auth/google' }),
		(req: express.Request, res: express.Response) =>
			res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user));
};

export const test = () => {
	return 'testing';
};
