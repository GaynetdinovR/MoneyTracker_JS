import React from 'react';
import { change_black, broom, bucket } from '../../../assets/icons/group.js';
import { useDispatch } from 'react-redux';
import { chooseWallet, clearWallet, deleteWallet } from '../../../store/walletSlice/walletSlice.js';
import { chooseWalletInSettings } from '../../../store/settingsSlice/settingsSlice.js';
import { clearWalletHistory } from '../../../store/historySlice/historySlice.js';

const WalletTools = ({ closeModal, walletId, disabled }) => {
    const dispatch = useDispatch();

    return (
        <div className="wallet-modal__tools">
            <button
                disabled={disabled}
                className="wallet-modal__tool"
                onClick={() => {
                    closeModal();
                    dispatch(chooseWallet(walletId));
                    dispatch(chooseWalletInSettings(walletId));
                }}>
                <img src={change_black} alt="change" />
            </button>

            <button
                disabled={disabled}
                className="wallet-modal__tool"
                onClick={() => {
                    dispatch(clearWalletHistory(walletId));
                    dispatch(deleteWallet(walletId));
                }}>
                <img src={bucket} alt="bucket" />
            </button>

            <button
                className="wallet-modal__tool"
                onClick={() => {
                    dispatch(clearWalletHistory(walletId));
                    dispatch(clearWallet(walletId));
                }}>
                <img src={broom} alt="broom" />
            </button>
        </div>
    );
};

export default WalletTools;
