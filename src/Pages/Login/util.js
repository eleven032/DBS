import {UserList} from '../../DB/index';

export function handleLogin (name, pwd) {
    const user = UserList.find((element) => {
        return element.name === name && element.password === pwd
    })
    return user? true : false;
}