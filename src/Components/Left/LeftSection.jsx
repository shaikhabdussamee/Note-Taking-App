import React from "react";
import "./LeftSection.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="l"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create New Notes group
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="d-flex justify-content-between gName">
            <h5>Group Name</h5>
            <input type="text" placeholder="Enter your group name...." />
          </div>
          <div className="d-flex justify-content-between mt-3">
            <h5>Choose Colour</h5>
            <div className="d-flex colours me-4">
              <div className="custom-colours purple"></div>
              <div className="custom-colours pink"></div>
              <div className="custom-colours aqua"></div>
              <div className="custom-colours orange"></div>
              <div className="custom-colours blue"></div>
              <div className="custom-colours lblue"></div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.onHide} className="bg-black px-5">
            Create
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="d-flex modale mt-5 ms-4 bg-warning">
        <div className="circle fw-bold custom-p">
          <span className="mt-3">SA</span>
        </div>
        <p className="fs-4 fw-bold mt-1 ms-2">Samee Notes</p>
      </div>
    </>
  );
}

function LeftSection() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="bg-white">
      <h1 className="fs-3 text-start ml-24">Pocket Notes</h1>
      <button
        className="fs-5 mt-4 py-1 fw-normal"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        + Create Notes group
      </button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default LeftSection;
