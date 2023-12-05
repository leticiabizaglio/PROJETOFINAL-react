import React, { useState, useRef, useEffect } from "react";
import Detail from "../detail/Detail.jsx";
import Card from "../card/Card.jsx";

const PopUp = () => {
  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupOpen(false);
    }
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <div className="App">
      <div onClick={handleClick}>
        <Card />
      </div>
      {isPopupOpen && (
        <div className="popup" ref={popupRef}>
          <Detail></Detail>
          <button onClick={handleClick}>Close</button>
        </div>
      )}
    </div>
  );
};

export default PopUp;
