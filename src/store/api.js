import axios from 'axios';

export const getPhotos = async () => {
    return await axios.get(`/photos?category=beach&_limit=6`);
};