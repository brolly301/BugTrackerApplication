import React from "react";
import Modal from "react-modal";
import "../../CSS/Modals/EditSaveModal.css";

export default function EditSaveModal({
  isOpen,
  onRequestClose,
  onSave,
  type,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={"edit-modal-overlay"}>
      <div className="edit-modal-content">
        <h2>Save {type}</h2>
        <p>Are you sure you want to save your update?</p>
        <div className="edit-modal-button-container">
          <button onClick={onSave}>Yes</button>
          <button onClick={onRequestClose}>No</button>
        </div>
      </div>
    </Modal>
  );
}
