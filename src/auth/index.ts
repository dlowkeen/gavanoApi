import * as express from 'express';
import * as auth from './auth';

const router = express.Router();

router.route('/google').get(auth.requestGoogleToken);
router.route('/google/callback').get(auth.authenticateGoogleUser);

export = router;
