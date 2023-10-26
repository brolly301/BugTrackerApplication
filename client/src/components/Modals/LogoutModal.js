import React from "react";
import Modal from "react-modal";
import "../../CSS/Modals/LogoutModal.css";

export default function LogoutModal({ isOpen, onRequestClose, onLogout }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={"logout-modal-overlay"}>
      <div className="logout-modal-content">
        <h2>Logging Out</h2>
        <p>Are you sure you want to logout?</p>
        <div className="logout-modal-button-container">
          <button onClick={onLogout}>Yes</button>
          <button onClick={onRequestClose}>No</button>
        </div>
      </div>
    </Modal>
  );
}
