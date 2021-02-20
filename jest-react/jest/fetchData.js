import axios from 'axios';

const url = 'http://www.dell-lee.com/react/api/demo1.json';

export const fetchData = () => {
  return axios.get(url);
}

