import { Request, Response } from 'express';
import fetch from 'node-fetch';

import { User } from '../models/user';
import { Tweet } from '../models/Tweet';


class TweetsController {
    getTweetsWithAuthor(req: Request, res: Response){
        const idTweet = req.params.id; 
        fetch('http://localhost:8080/tweets/' + idTweet)
        .then(res => res.json())
        .then(tweet => {
            const userId = tweet.userId;
            return fetch('http://localhost:8080/users/' + userId)
                    .then(res => res.json())
                    .then(user => new Tweet(user, tweet.id, tweet.body,tweet.date))
            }
        )
        .then(model => res.send(model));
    }
}

export default TweetsController;