import { User } from './user/user.model'
import { Event } from '../components/event/event.component'

export class EventPartecipation {
    id: number
    user: User
    event: Event
}