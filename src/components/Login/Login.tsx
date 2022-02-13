import { SyntheticEvent, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Routes } from "~/constants";
import login from "~/services/login";
import LoginForm  from "./Components/LoginForm";
import TimeOutContainer  from "./Components/TimeOutContainer";

import "./login-style.scss";

const Login = (): JSX.Element => {
  const { push } = useHistory();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>(null);
  const [wrongAttempts, setWrongAttemps] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [loading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (
    event: SyntheticEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setErrorMessage(null);

    const usernameLength = username.length;
    const passwordLength = password.length;

    if (wrongAttempts === 3) {
      return;
    }

    if (usernameLength === 0 && passwordLength === 0) {
      setWrongAttemps(wrongAttempts + 1);
      setErrorMessage("Type in username and password");
      return;
    }

    if (usernameLength === 0) {
      setWrongAttemps(wrongAttempts + 1);
      setErrorMessage("Type in a username.");
      return;
    }

    if (passwordLength === 0) {
      setWrongAttemps(wrongAttempts + 1);
      setErrorMessage("Type in a password.");
      return;
    }

    if (usernameLength > 30 || passwordLength > 30) {
      setWrongAttemps(wrongAttempts + 1);
      setErrorMessage("Username or password is too long.");
      return;
    }

    setIsLoading(true);

    try {
      const loginResponse = await login(username, password);
      if (loginResponse !== 401) {
        push(Routes.Login);
      }
      setWrongAttemps(wrongAttempts + 1);
      setErrorMessage("Wrong username or password.");
      console.clear();
    } catch (error) {
      setErrorMessage(error.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (wrongAttempts !== 3) {
      return;
    }

    if (timeLeft === 0) {
      setTimeLeft(30);
      setWrongAttemps(0);
      setUsername("");
      setPassword("");
      setErrorMessage(null);
    }

    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [wrongAttempts, timeLeft]);

  return (
    <div className="login-page">
      {wrongAttempts === 3 ? (
        <TimeOutContainer timeLeft={timeLeft} />
      ) : (
        <LoginForm
          onSubmit={handleSubmit}
          setUsername={setUsername}
          setPassword={setPassword}
          username={username}
          password={password}
          loading={loading}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
};

export default Login;
