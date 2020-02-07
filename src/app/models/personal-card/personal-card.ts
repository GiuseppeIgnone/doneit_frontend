import { User } from '../user/user.model';
import { Url } from 'url';
import { Wallet } from '../wallet';

export class PersonalCard {


    university: string;
    faculty: string;
    telephone: string;
    statusDescription: string;
    done: boolean;
    base64StringImage: string;
    user = new User("", "");
    imageUrl: Url;
    wallet: Wallet = new Wallet();
}