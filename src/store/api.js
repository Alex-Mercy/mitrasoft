import axios from 'axios';

export const getPhotos = async (category) => {
    return await axios.get(`/photos?category=${category}&_limit=6`);
};