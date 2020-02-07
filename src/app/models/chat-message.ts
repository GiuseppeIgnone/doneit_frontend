import { User } from './user/user.model';

export class ChatMessage {

    from: User
    to: User
    content: string
    date: Date


    constructor(userFrom, userTo, content) {
        this.from = userFrom
        this.to = userTo
        this.content = content
    }

    public getContent() {
        return this.content
    }

    public getUserFrom() {
        return this.from
    }

    public getUserTo() {
        return this.to
    }

}

export class SocketChatMessage {

    userTo: string;
    userFrom: string;
    content: string;
}