import {IItem} from "~/services/getUserItems";
import { MS_PER_DAY } from "~/constants";

export const itemHasReusedEmail = (item: IItem, itemList: Array<IItem>) => {
  const reusedItems = itemList.filter((listItem) => (
    listItem.email === item.email
  ))
  return reusedItems.length > 1;
};

export const itemHasWeakEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)) {
    return true;
  }
};

export const itemHasOldAge = (date: Date): number => {
  const currentDate = new Date();
  const utc1 = Date.UTC(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const utc2 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor((utc1 - utc2) / MS_PER_DAY);
};

