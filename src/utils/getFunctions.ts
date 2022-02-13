import qs from "query-string";

import { IItem } from "../constants";
import { API } from "../constants";
import { itemHasOldAge, itemHasWeakEmail } from "./itemHasFunctions";

export const getItemCount = (items: IItem[], parameter?: string): number => {
  if (parameter === "email") {
    return items.reduce(
      (count, { email }) =>
        itemHasWeakEmail(email) === true ? count + 1 : count,
      0
    );
  }
  if (parameter === "age") {
    return items.reduce(
      (count, { createdAt }) =>
        itemHasOldAge(new Date(createdAt)) > 30 ? count + 1 : count,
      0
    );
  }
  return items.reduce((count) => count + 1, 0);
};

export const getUrl = (endpoint: API, params?: Record<string, any>) => {
  const query = qs.stringify(params);

  return `${process.env.API_URL}/${endpoint}${query ? `?${query}` : ""}`;
};
