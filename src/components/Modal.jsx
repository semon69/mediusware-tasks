import { useState } from "react";
import DetailsModal from "./DetailsModal";

const Modal = ({ closeModal, data, contactsName }) => {
  const [modalOpenC, setModalOpenC] = useState(false);
  const [detailsItem, setDeatilsItem] = useState(false);

  // open modal and set item data in details modal
  const handleOpenModal = (item) => {
    setDeatilsItem(item);
    setModalOpenC(true);
  };

  const closeModalC = () => {
    setModalOpenC(false);
  };


  return (
    <div
      className="modal"
      tabIndex="-1"
      role="dialog"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{contactsName}</h5>
            <button type="button" className="close" onClick={closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div
            className="modal-body"
            style={{ maxHeight: "300px", overflowY: "auto" }}
          >
            {data?.results?.map((item) => (
              <div
                key={item?.id}
                className="d-flex justify-content-between align-items-center border-bottom p-1 mb-2"
              >
                <p>{item?.id}</p>
                <p>{item?.phone}</p>
                <button
                  onClick={() => handleOpenModal(item)}
                  className="btn btn-lg btn-outline-primary"
                  type="button"
                >
                  See Details
                </button>
                {modalOpenC && <DetailsModal closeModalC={closeModalC} data={detailsItem} />}
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
