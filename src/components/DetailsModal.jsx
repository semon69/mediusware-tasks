const DetailsModal = ({ closeModalC, data }) => {
  // console.log(data);
  return (
    <div
      className="modal"
      tabIndex="-1"
      role="dialog"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          {/* <div className="modal-header">
            <h5 className="modal-title">{contactsName}</h5>
            <button type="button" className="close" onClick={closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div> */}
          <div
            className="modal-body"
            style={{ maxHeight: "300px", overflowY: "auto" }}
          >
          <p className="fw-bold">Country Details</p>
            <p>{data?.country?.name}</p>
            <p>{data?.phone}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModalC}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
