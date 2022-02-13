import { FC } from "react";

import { IItem } from "~/constants";
import ItemIcon from "./components/ItemIcon";
import ItemInfo  from "./components/ItemInfo";
import UpdateModal from "./components/UpdateModal";

import "./list-style.scss";

interface IList {
  items: Array<IItem>;
}

const List: FC<IList> = ({ items }): JSX.Element => (
  <ul className="list">
    {items.map((item, key) => (
      <li className="item" key={key}>
        <ItemIcon name={item.name} />
        <ItemInfo name={item.name} email={item.email} date={item.createdAt} />
        <UpdateModal item={item} />
      </li>
    ))}
  </ul>
);

export default List;
