import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

function Modal({ show, onClose, children }) {
    const [isBrowser, setIsBrowser] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);



    const handleCloseClick = (e) => {
        e.preventDefault();
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 200);
    };

    const modalContent = show ? (
        <div className={`modal-overlay ${isClosing ? "on-close" : ""}`}>
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
