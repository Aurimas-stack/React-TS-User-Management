import { FC } from "react";

interface IItemIcon {
  name: string;
}

const ItemIcon: FC<IItemIcon> = ({ name }): JSX.Element => (
  <div className="item-icon">{name.substring(0, 2)}</div>
);

export default ItemIcon;
