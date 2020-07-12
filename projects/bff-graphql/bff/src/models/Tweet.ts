import { User } from "./user";

export class Tweet {

    constructor(
        public author: User,
        public id: string,
        public body: string,
        public date: Date
    ) { }

}