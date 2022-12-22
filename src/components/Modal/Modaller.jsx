import React from "react"
import './modal.css';

const Modaller = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
         {children}
         
        
        <button type="button" onClick={handleClose}>
          Return to overview
        </button>
      </section>
    </div>
  );
};

export default Modaller