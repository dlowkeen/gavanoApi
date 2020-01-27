import * as express from 'express';
import * as passport from 'passport';
import * as auth from './auth';

const router = express.Router();

// router.route('/signup').post(auth.authenticateLocal);
router.post('/signup', passport.authenticate('local'), function(req: express.Request, res: express.Response) {
	// If this function gets called, authentication was successful.
	// `req.user` contains the authenticated user.
	if (req?.user && req.user) {
		console.log('we out here');
		res.redirect(`/auth/logged-in?email=${req.user}`);
	} else {
		res.redirect('/healthcheck');
	}
});
router.route('/logged-in').get(auth.authenticated);
router.route('/google').get(auth.requestGoogleToken);
router.route('/google/callback').get(auth.authenticateGoogleUser);

export = router;
