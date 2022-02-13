import { API } from "~/constants";
import { getUrl } from "~/utils/getFunctions";
import { IItem } from "~/constants";

const updateItem = (item: IItem): Promise<Response> =>
  fetch(getUrl(API.Items), {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export default updateItem;
