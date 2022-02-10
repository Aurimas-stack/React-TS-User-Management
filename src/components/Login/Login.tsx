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
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (
    event: SyntheticEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    try {
      await login(username, password);
      setIsLoading(false);
      push(Routes.Users);
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  if (loading === true) {
    return <LoadingScreen />;
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="text-center">Mygom.tech</h1>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
          type="text"
          className="input mt-52px"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
          className="input mt-24px"
        />
        <ErrorBlock error={errorMessage} />
        <button type="submit" className="button mt-24px">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
