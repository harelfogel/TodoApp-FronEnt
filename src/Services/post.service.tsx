import axios from 'axios';
import { Post } from '../Types/post.type';
import getUrl from '../utils';

export const fetchPosts = async (userId:number) => {
    try {
        const posts = await axios.get<Post[]>(`${getUrl()}/posts?userId=${userId}`);
        return posts.data;
    } catch (e) {
        console.log(e);
        alert('Error! Cannot fetch posts');
        return [];
    }
}
