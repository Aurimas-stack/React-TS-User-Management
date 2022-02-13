import { API } from "~/constants";
import { IItem } from "~/constants";
import { getUrl } from "~/utils/getFunctions";

const getUserItems = async (userId?: string): Promise<Array<IItem>> => {
  const url = getUrl(API.Items, {
    userId,
  });

  const response: Response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const data = await response.json();

  return data.items;
};

export default getUserItems;
