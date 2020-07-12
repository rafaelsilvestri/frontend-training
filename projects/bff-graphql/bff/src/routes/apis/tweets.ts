import * as express from 'express';
import TweetsController from '../../controllers/tweets';

const router = express.Router();
const tweetsController = new TweetsController();

router.get('/:id', (req, res) => tweetsController.getTweetsWithAuthor(req, res));

export default router;