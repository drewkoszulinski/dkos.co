import Link from 'next/link';
import Image from 'next/image';
import Modal from '../components/Modal';
import React, { useState } from "react";

const PortfolioItem = (props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="portfolio-item">
            <div className="portfolio-inner-left">
                <h3 className="heading">
                    {props.title}
                </h3>
                <p className="description">{props.description}</p>
                {props.navigateTo &&
                <Link href={props.navigateTo}>
                    <button className="button secondary portfolio-btn">Read More</button>
                </Link>
                }
            </div>
            <div className="portfolio-inner-right">
                <Image
                    className="portfolio-image"
                    src={props.image}
                    width={props.imgWidth}
                    height={props.imgHeight}
                    onClick={() => setShowModal(true)}>
                </Image>
                <Modal
                    className="modal-component"
                    onClose={() => setShowModal(false)}
                    show={showModal}>
                    <Image
                        className="modal-image"
                        src={props.image}
                        width={props.imgWidth}
                        height={props.imgHeight}
                        layout='responsive'>
                    </Image>
                </Modal>
            </div>

        </div>
    )
}

// width={props.imgWidth} height={props.imgHeight}

export default PortfolioItem
