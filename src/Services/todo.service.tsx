import axios from 'axios';
import { Todo } from '../Types/todo.type';
import getUrl from '../utils';


export const fetchTodos = async () => {
    try {
        const todos = await axios.get<Todo[]>(`${getUrl()}/todos`);
        return todos.data;
    } catch (e) {
        console.log(e);
        alert('Error! Cannot fetch todos');
        return [];
    }
}
