import React from 'react';
import { add_operation_bg } from '../../../assets/content/group.js';

const AddPayment = ({ setModal }) => {
    const openModal = () => {
        setModal(true);
    };

    return (
        <button className="menu__add-payment" onClick={() => openModal()}>
            <span>Добавить платеж</span>
            <img src={add_operation_bg} alt="background" />
        </button>
    );
};

export default AddPayment;
