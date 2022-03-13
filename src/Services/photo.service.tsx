import axios from 'axios';
import { Photo } from '../Types/photo.type';
import getUrl from '../utils';


export const fetchPhotos = async (albumId: number) => {
    try {
        const photos = await axios.get<Photo[]>(`${getUrl()}/photos?albumId=${albumId}&_limit=20`);
        return photos.data;
    } catch (e) {
        console.log(e);
        alert('Error! Cannot fetch photos');
        return [];
    }
}
