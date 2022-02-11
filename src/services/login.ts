import { API } from "~/constants";
import { getUrl } from "~/utils/getFunctions";

const login = async (username: string, password: string) => {
  const url = getUrl(API.Login, {
    username,
    password,
  });

  const response: Response = await fetch(url);

  if (response.status === 401) {
    return response.status;
  }

  const data = await response.json();
  const { token } = data;

  localStorage.setItem("token", token);
};

export default login;
