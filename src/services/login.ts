import {API} from '~/constants';
import { getUrl } from '~/utils/getFunctions';

const login = async (username: string, password: string) => {
  const url = getUrl(API.Login, {
    username,
    password,
  });

  const response = await fetch(url);
  console.log(response)
  const data = await response.json();
  const { token } = data;


  localStorage.setItem('token', token);
};

export default login;
