import * as express from 'express';

// import sub-routers
import * as authRouter from './auth';

const router = express.Router();

router.use('/auth', authRouter);

router.get('/healthcheck', (req: express.Request, res: express.Response) => res.send('OK'));

export = router;
