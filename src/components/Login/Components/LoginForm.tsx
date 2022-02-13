import { FC } from "react";
import { SyntheticEvent } from "react";

import ErrorBlock from "../../ErrorBlock";
import LoadingScreen from "../../LoadingScreen";

interface LoginProps {
  onSubmit: (event: SyntheticEvent<HTMLFormElement>) => Promise<void>;
  errorMessage: string;
  loading: boolean;
  username: string;
  password: string;
  setUsername: (event: string) => void;
  setPassword: (event: string) => void;
}

export const LoginForm: FC<LoginProps> = (props): JSX.Element => {
  return (
    <form className="login-form" onSubmit={props.onSubmit}>
      <h1 className="text-center">Mygom.tech</h1>
      <input
        value={props.username}
        maxLength={30}
        onChange={(event) => props.setUsername(event.target.value)}
        placeholder="Username"
        type="text"
        className="input mt-52px"
      />
      <input
        value={props.password}
        maxLength={30}
        onChange={(event) => props.setPassword(event.target.value)}
        placeholder="Password"
        type="password"
        className="input mt-24px"
      />
      <ErrorBlock error={props.errorMessage} />
      {props.loading ? (
        <LoadingScreen />
      ) : (
        <button type="submit" className="button mt-24px">
          Login
        </button>
      )}
    </form>
  );
};
