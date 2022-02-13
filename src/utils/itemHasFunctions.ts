import { IItem } from "~/constants";
import { MS_PER_DAY } from "~/constants";

export const itemHasReusedEmail = (item: IItem, itemList: Array<IItem>) => {
  const reusedItems = itemList.filter(
    (listItem) => listItem.email === item.email
  );
  return reusedItems.length;
};

export const itemHasWrongEmail = (email: string): boolean => {
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!validEmail.test(email)) {
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
