import React from "react";
import Modal from "react-modal";
import "../../CSS/Modals/DeleteModal.css";

Modal.setAppElement("#root");

export default function DeleteModal({
  isOpen,
  onRequestClose,
  onDelete,
  type,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={"delete-modal-overlay"}>
      <div className="delete-modal-content">
        <h2>Delete {type}</h2>
        <p>Are you sure you want to delete?</p>
        <div className="delete-modal-button-container">
          <button onClick={onDelete}>Yes</button>
          <button onClick={onRequestClose}>No</button>
        </div>
      </div>
    </Modal>
  );
}
