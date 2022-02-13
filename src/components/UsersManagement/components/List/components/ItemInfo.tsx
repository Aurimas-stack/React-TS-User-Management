import { FC } from "react";

interface ItemInfoProps {
  name: string;
  email: string;
  date: string;
}

const ItemInfo: FC<ItemInfoProps> = ({
  name,
  email,
  date,
}): JSX.Element => {
  return (
    <div>
      <div className="title">{name}</div>
      <div className="description">{"User email: " + email}</div>
      <div className="creation_date">
        {"Created at: " + date.substring(0, 10)}
      </div>
    </div>
  );
};

export default ItemInfo;
