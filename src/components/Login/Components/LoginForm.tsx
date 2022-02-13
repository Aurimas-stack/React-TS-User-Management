import { FC } from "react";
import { SyntheticEvent } from "react";

import ErrorBlock from "../../ErrorBlock";
import LoadingScreen from "../../LoadingScreen";

interface LoginProps {
  username: string;
  password: string;
  errorMessage: string;
  loading: boolean;
  setUsername: (event: string) => void;
  setPassword: (event: string) => void;
  onSubmit: (event: SyntheticEvent<HTMLFormElement>) => Promise<void>;
}

export const LoginForm: FC<LoginProps> = ({
  username,
  password,
  errorMessage,
  loading,
  setUsername,
  setPassword,
  onSubmit,
}): JSX.Element => {
  return (
    <form className="login-form" onSubmit={onSubmit}>
      <h1 className="text-center">Mygom.tech</h1>
      <input
        value={username}
        maxLength={30}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username"
        type="text"
        className="input mt-52px"
      />
      <input
        value={password}
        maxLength={30}
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
  );
};

export default LoginForm;
