import React, { useState } from 'react';
import './PopUp.css';
import { Login } from '@/pages';

const Popup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
            {/* Aquí puedes agregar el componente de inicio de sesión */}
            <Login />
          </div>
        </div>
      )}
    </>
  );
};



export default Popup;
