import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

function Modal({ show, onClose, children }) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);



    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
        console.log('hi');
    };

    const modalContent = show ? (
        <div className="modal-overlay">
            <button className="button secondary modal-close-btn" onClick={handleCloseClick}>x</button>
            <div className="modal-content">{children}</div>
        </div>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
}

export default Modal
