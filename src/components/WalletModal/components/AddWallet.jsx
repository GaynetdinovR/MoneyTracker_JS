import React from 'react';
import { cross_in_circle } from '../../../assets/icons/group.js';
import { useDispatch } from 'react-redux';
import { addWallet } from '../../../store/walletSlice/walletSlice.js';

const AddWallet = () => {
    const dispatch = useDispatch();

    return (
        <button className="wallet-modal__add-wallet" onClick={() => dispatch(addWallet())}>
            <img src={cross_in_circle} alt="add" />
        </button>
    );
};

export default AddWallet;
