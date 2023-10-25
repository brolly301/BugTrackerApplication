import React from "react";
import Modal from "react-modal";
import "../../CSS/Modals/DeleteModal.css";

Modal.setAppElement("#root");

export default function DeleteModal({ isOpen, onRequestClose, onDelete }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Delete Confirmation"
      className={"delete-modal-overlay"}>
      <div className="delete-modal-content">
        <h2>Delete Ticket</h2>
        <p>Are you sure you want to delete?</p>
        <div className="delete-modal-button-container">
          <button onClick={onDelete}>Delete</button>
          <button onClick={onRequestClose}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
}
