import { FC } from "react";
import { useHistory } from "react-router-dom";

import { IItem } from "~/constants";
import { Routes } from "~/constants";
import { useUserContext } from "~/components/UserContext";
import logout from "../../../../services/logout";

import "./header-style.scss";

interface IHeader {
  items: Array<IItem>;
  username: string;
}

const Header: FC<IHeader> = ({ items, username }): JSX.Element => {
  const { push } = useHistory();
  const userContext = useUserContext();

  const handleLogout = () => {
    logout();
    userContext.deleteData();
    push(Routes.Login);
  };

  return (
    <div className="header">
      <div className="user-section">
        <button onClick={handleLogout}>{`Logout ${username}`}</button>
      </div>
      <h1>{`${items.length} Emails are wrong`}</h1>
      <span>
        Email validator to protect your company from bad registrations
      </span>
    </div>
  );
};

export default Header;
