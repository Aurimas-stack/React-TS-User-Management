import {FC, useState} from 'react';
import {IItem} from "~/services/getUserItems";
import ItemIcon from './components/ItemIcon';
import updateItem from '../../../../services/updateItem';
import Modal from 'react-modal';

import './list-style.scss';

interface IList {
  items: Array<IItem>,
}

interface IUpdateModal {
  item: IItem;
}


const UpdateModal: FC<IUpdateModal> = ({ item }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newEmail, setNewEmail] = useState<string>("");

  return (
    <>
      <button className="update" onClick={() => setShowModal(true)}>
        Update Password
      </button>
      <Modal
        className="modal"
        appElement={document.getElementById('app')}
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Example Modal"
      >
        <h1>Update Password</h1>
        <input
          placeholder="new password"
          className="input"
          value={newEmail}
          onChange={(event) => setNewEmail(event.target.value)} 
        />
        <div className="pt-12px text-center">
          <button className="button" onClick={async () => {
            await updateItem({
              ...item,
              email: newEmail,
            })
            setShowModal(false)
          }}>Change</button>
          <button className="button ml-12px" onClick={() => {
            setShowModal(false)
          }}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
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
              {item.email}
            </div>
            <div className="creation_date">
              {item.createdAt.substring(0, 10)}
            </div>
          </div>
          <UpdateModal item={item} />
        </li>
      ))
    }
  </ul>
)

export default List;
