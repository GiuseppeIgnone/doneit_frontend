import { User } from '../user/user.model';

export class Proposal {

    id: number
    user: User
    state: string

    constructor( id: number, user: User, state: string){
        this.user = user
        this.id = id
        this.state = state
    }

  
}
