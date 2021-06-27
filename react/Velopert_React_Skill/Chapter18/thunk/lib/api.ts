import axios from 'axios';

export const getPost = (id: number) => axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`);
export const getUsers = (id: number) => axios.get(`http://jsonplaceholder.typicode.com/users`);
