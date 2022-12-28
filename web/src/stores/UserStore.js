import {makeAutoObservable} from "mobx";

class UserStore {

    Users = ['no users added']

    constructor() {
        makeAutoObservable(this, {},{autoBind: true} )
    }

    addUser = (user) => {

        if (this.Users.length === 1 && this.Users[0] === 'no users added' ) {
            this.Users.splice(0,1)
        }

        this.Users.push(user)}

}

export const userStore = new UserStore()

