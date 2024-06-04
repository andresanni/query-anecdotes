import axios from 'axios';
const baseURL = 'http://localhost:3001/anecdotes';

export const getAll = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

export const create = async (content) => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseURL, object);
  return response.data;
};

export const update = async (anecdote) => {
  const response = await axios.put(`${baseURL}/${anecdote.id}`, anecdote);
  return response.data;
};
