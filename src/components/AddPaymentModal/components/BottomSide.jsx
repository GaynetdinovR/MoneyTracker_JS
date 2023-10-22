import React from 'react';

const BottomSide = ({ close, addPayment }) => {
    const clearInputs = () => {
        document.querySelector('#add-payment_balance').value = '';
        document.querySelector('#add-payment_description').value = '';
    };

    return (
        <div className="add-payment-modal__bottom">
            <button
                onClick={() => {
                    if(addPayment()){
                        clearInputs();
                        close();
                    }
                }}
                className="add-payment-modal__btn">
                Add
            </button>
        </div>
    );
};

export default BottomSide;
