import { Roles } from "../data";
import { employees } from "../data";

interface Items {
  id: string;
  name: string;
  role: Roles;
  email: string;
  createdAt: string;
}

let items: Items[] = [];

export const updateItem = (item: Items) => {
  items.push(item);
};


export const getItems = (): Items[] => {
  return employees.map((userItem) => {
    const updatedItem: Items = items.find(({ id }) => id === userItem.id);
    
    return {
      ...(updatedItem || userItem),
    };
  });
};
