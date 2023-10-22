import React from 'react';

const BottomSide = ({ onClick, handler }) => {
    return (
        <div className='date-modal__bottom-side'>
            <select
                className="date-modal__operation"
                name="operation"
                onChange={(e) => handler(e)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="~">~</option>
            </select>

            <button className='date-modal__btn' onClick={() => onClick()}>
                Choose
            </button>
        </div>
    );
};

export default BottomSide;
