export class User {

    id: number
    name: string;
    surname: string;
    email: string;
    username: string;
    password: string;




    constructor(username, password) {
        this.username = username
        this.password = password
        this.name = ''
        this.surname = ''
        this.email = ''
    }

    getUsername() {
        return this.username
    }

    getPassword() {
        return this.password
    }

    setPassword(password) {
        this.password = password;
    }

    setUsername(username) {
        this.username = username;
    }

    getName() {
        return this.name;
    }

    getSurname() {
        return this.surname
    }

    getEmail() {
        return this.email
    }


}
