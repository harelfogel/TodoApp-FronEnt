import axios from 'axios';
import getUrl from '../utils';

interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export const fetchComments = async (postId: number) => {
    try {
        const comments = await axios.get<Comment[]>(`${getUrl()}/comments?postId=${postId}&_limit=2`);
        return comments.data;
    } catch (e) {
        console.log(e);
        alert('Error! Cannot fetch comments');
        return [];
    }
}
