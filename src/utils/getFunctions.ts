import { IItem } from "~/services/getUserItems";
import { API } from '../constants';
import { itemHasOldAge,  itemHasWeakEmail, itemHasReusedEmail } from "./itemHasFunctions";
import qs from 'query-string';


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
  
    return `${process.env.API_URL}/${endpoint}${query ? `?${query}` : ''}`
  };
