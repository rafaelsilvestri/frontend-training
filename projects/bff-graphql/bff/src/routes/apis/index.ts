import * as express from 'express';
import userRouter from './users';
import tweetsRouter from './tweets';


const router = express.Router();

router.use('/users', userRouter);
router.use('/tweets', tweetsRouter);
// create your parents route here

export default router;