import {FC} from 'react';
import {IItem} from "~/services/getUserItems";
import ItemIcon from './components/ItemIcon';
import UpdateModal from "./updateModal";

import './list-style.scss';

interface IList {
  items: Array<IItem>,
}

const List: FC<IList> = ({items}) => (
  <ul className="list">
    {
      items.map((item, key) => (
        <li className="item" key={key}>
          <ItemIcon name={item.name}/>
          <div>
            <div className="title">
              {item.name}
            </div>
            <div className="description">
              {"User email: " + item.email}
            </div>
            <div className="creation_date">
              {"Created at: " + item.createdAt.substring(0, 10)}
            </div>
          </div>
          <UpdateModal item={item} />
        </li>
      ))
    }
  </ul>
)

export default List;
