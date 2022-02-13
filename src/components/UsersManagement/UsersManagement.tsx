import { Route, Switch } from "react-router-dom";
import { Routes } from "~/constants";
import { useUserContext } from "../UserContext";

import useItemsProvider from "./useItemsProvider";
import {
  itemHasWeakEmail,
  itemHasReusedEmail,
  itemHasOldAge,
} from "~/utils/itemHasFunctions";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import List from "./components/List/List";
import LoadingScreen from "../LoadingScreen";
import ErrorBlock from "../ErrorBlock";

const UsersManagement = (): JSX.Element => {
  const {
    errorMessage: userProviderErrorMessage,
    isLoading: userDataIsLoading,
    username,
  } = useUserContext();

  const { items, isLoading, errorMessage } = useItemsProvider();

  if (isLoading || userDataIsLoading) {
    return <LoadingScreen />;
  }

  if (userProviderErrorMessage || errorMessage) {
    return <ErrorBlock error={userProviderErrorMessage || errorMessage} />;
  }

  return (
    <div className="container">
      <Header items={items} username={username} />
      <Filter items={items} />
      <Switch>
        <Route exact path={Routes.Users}>
          <List items={items} />
        </Route>
        <Route path={Routes.Weak}>
          <List
            items={items.filter(
              (item) => itemHasWeakEmail(item.email) === true
            )}
          />
        </Route>
        <Route path={Routes.Reused}>
          <List
            items={items.filter((item) => itemHasReusedEmail(item, items))}
          />
        </Route>
        <Route path={Routes.Old}>
          <List
            items={items.filter(
              (item) => itemHasOldAge(new Date(item.createdAt)) > 30
            )}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default UsersManagement;
