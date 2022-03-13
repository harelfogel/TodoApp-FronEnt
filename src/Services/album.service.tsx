import axios from 'axios';
import { Album } from '../Types/album.type';
import getUrl from '../utils';


export const fetchAlbums = async () => {
    try {
        const albums = await axios.get<Album[]>(`${getUrl()}/albums`);
        return albums.data;
    } catch (e) {
        console.log(e);
        alert('Error! Cannot fetch albums');
        return [];
    }
}
