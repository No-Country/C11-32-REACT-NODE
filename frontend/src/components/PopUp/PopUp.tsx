import React, { useState } from "react";
import "./PopUp.css";

interface PopupProps {
  handleClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ handleClose }) => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
    handleClose();
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={handleClosePopup}>
              Close
            </button>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lNPEvLCuFwA?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
