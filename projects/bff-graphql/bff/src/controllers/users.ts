import { Request, Response } from 'express';
import axios from 'axios';
import { User } from '../models/user';
import config from '../config/config';
import fetch from 'node-fetch';

config
const {
    proxyApiUrl
} = config;

class UsersController {
    getRetired(req: Request, res: Response) {
        return fetch('http://localhost:8080/users?age_gte=60')
            .then(res => res.json())
            .then(data => res.send(data));
    }

    getUsersWithCompleteName(req: Request, res: Response) {
        const users = axios.get(`${proxyApiUrl}/users`)
            .then(({ data: users }) => {
                const newUsers = users.map(user => {
                    return new User(user)
                })

                return res.send(newUsers)
            })

    }
}

export default UsersController;