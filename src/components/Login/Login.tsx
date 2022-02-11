import { SyntheticEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "~/constants";
import LoadingScreen from "../LoadingScreen";
import login from "~/services/login";
import ErrorBlock from "../ErrorBlock";

import "./login-style.scss";

const Login = (): JSX.Element => {
  const { push } = useHistory();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>(null);

  const handleSubmit = async (
    event: SyntheticEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setErrorMessage(null);

    if (username.length === 0 && password.length === 0) {
      setErrorMessage("Type in username and password");
      return;
    }

    if (username.length === 0) {
      setErrorMessage("Type in a username.");
      return;
    }

    if (password.length === 0) {
      setErrorMessage("Type in a password.");
      return;
    }

    try {
      const loginResponse = await login(username, password);
      if (loginResponse === 401) {
        setErrorMessage("Wrong username or password.");
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      push(Routes.Users);
    } catch (error) {
      console.log(error.status)
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="text-center">Mygom.tech</h1>
        <input
          value={username}
          maxLength={100}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
          type="text"
          className="input mt-52px"
        />
        <input
          value={password}
          maxLength={100}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
          className="input mt-24px"
        />
        <ErrorBlock error={errorMessage} />
        {loading ? (
          <LoadingScreen />
        ) : (
          <button type="submit" className="button mt-24px">
            Login
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
