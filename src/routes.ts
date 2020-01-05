import * as express from 'express';

// import sub-routers

const router = express.Router();

// router.use('/auth', authRouter);

router.get('/healthcheck', (req: express.Request, res: express.Response) => res.send('OK'));

export = router;
