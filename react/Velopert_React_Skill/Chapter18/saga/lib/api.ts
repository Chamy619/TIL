import axios from 'axios';

export const getPost = async (id: number) => {
  const response = await axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`);
  const result: IPost = response.data;
  return result;
};
export const getUsers = async (id: number) => {
  const response = await axios.get(`http://jsonplaceholder.typicode.com/users`);
  const result: IUser[] = response.data;
  return result;
};

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Object;
  phone: string;
  website: string;
  company: Object;
}
