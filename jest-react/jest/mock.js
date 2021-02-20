import axios from 'axios';

export const runCallback = (fn) => {
  fn('abc');
}

export const getData = () => {
  return axios.get('/api').then(res => res.data);
}