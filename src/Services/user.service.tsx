import axios from 'axios';
import { User } from '../Types/user.type';
import getUrl from '../utils';

export const fetchUsers = async () => {
    try {
        const users = await axios.get<User[]>(`${getUrl()}/users?_limit=20`);
        return users.data;
    } catch (e) {
        console.log(e);
        alert('Error! Cannot fetch users');
        return [];
    }
}


export const fetchUserNameById= async (userId:number) => {
    try {
        const user = await axios.get<User>(`${getUrl()}/users/${userId}`);
        return user.data;
    } catch (e) {
        console.log(e);
        alert('Error! Cannot fetch specific user');
        return null;
    }
}
