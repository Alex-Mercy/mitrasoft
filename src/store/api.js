import axios from 'axios';

const baseUrl = 'https://my-json-server.typicode.com/Alex-Mercy/serverGalery'

export const getPhotos = async (category) => {
    return await axios.get(`${baseUrl}/photos?category=${category}&_limit=6`);
};

export const getPhotoDetails = async (id) => {
    return await axios.get(`${baseUrl}/photos/${id}`);
};