import { FC, useState } from "react";
import { IItem } from "~/services/getUserItems";
import updateItem from "../../../../services/updateItem";
import Modal from "react-modal";

interface IUpdateModal {
  item: IItem;
}

Modal.setAppElement('#app');

const UpdateModal: FC<IUpdateModal> = ({ item }): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newEmail, setNewEmail] = useState<string>("");

  return (
    <>
      <button className="update" onClick={() => setShowModal(true)}>
        Update Password
      </button>
      <Modal
        className="modal"
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
          <button
            className="button"
            onClick={async () => {
              await updateItem({
                ...item,
                email: newEmail,
              });
              setShowModal(false);
            }}
          >
            Change
          </button>
          <button
            className="button ml-12px"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default UpdateModal;
