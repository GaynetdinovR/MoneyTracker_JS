import React from 'react';
import Categories from './Categories';
import ReactInputMask from 'react-input-mask';

const TopSide = ({ isOpen, setMenu, handleInputChanges }) => {
    return (
        <div className="add-payment-modal__top">
            <Categories handler={handleInputChanges} isOpen={isOpen} setMenu={setMenu} />

            <ReactInputMask
                mask="9999999"
                className="add-payment-modal__sum"
                placeholder="Enter sum"
                maskChar=""
                onChange={(e) => handleInputChanges(e)}
                name="sum"
                id="add-payment_balance"
            />

            <select
                className="add-payment-modal__type"
                name="operation"
                onChange={(e) => handleInputChanges(e)}>
                <option value="+">+</option>
                <option value="-">-</option>
            </select>
        </div>
    );
};

export default TopSide;
