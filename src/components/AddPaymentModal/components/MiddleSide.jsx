import React from 'react';

const MiddleSide = ({ handleInputChanges }) => {
    return (
        <div className="add-payment-modal__middle">
            <textarea
                placeholder="Enter description"
                className="add-payment-modal__textarea"
                maxLength={70}
                onChange={(e) => handleInputChanges(e)}
                name="description"
                id="add-payment_description"
            />
        </div>
    );
};

export default MiddleSide;
