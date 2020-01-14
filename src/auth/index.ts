import * as express from 'express';
// import * as auth from './auth';
import * as passport from 'passport';

const router = express.Router();

// router.route('/google').get(auth.requestGoogleToken);
// router.route('/google/callback').get(auth.authenticateGoogleUser);

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
	// Successful authentication, redirect home.
	res.redirect('/');
});

export = router;
