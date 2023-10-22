import React from 'react';
import { close } from '../../assets/icons/group.js';
import Wallet from './components/Wallet.jsx';
import WalletTools from './components/WalletTools.jsx';
import AddWallet from './components/AddWallet.jsx';
import { useSelector } from 'react-redux';

const WalletModal = ({ setModal, isOpen }) => {
    const wallets = useSelector((state) => state.wallets);

    const closeModal = () => {
        setModal(false);
    };

    const isDisabledTools = () => {
        return wallets.length === 1;
    };

    return (
        <div
            className={isOpen ? 'modal-wrap wallet-modal active' : 'modal-wrap wallet-modal'}
            onClick={() => closeModal()}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__close" onClick={() => closeModal()}>
                    <img src={close} alt="close" />
                </div>

                <h3 className="modal__title"> Wallets </h3>

                {wallets.map((wallet, i) => (
                    <div className="wallet-modal__wrap" key={i}>
                        <Wallet wallet={wallet} />
                        <WalletTools
                            closeModal={closeModal}
                            walletId={wallet.id}
                            disabled={isDisabledTools()}
                        />
                    </div>
                ))}

                {[...Array(3 - wallets.length)].map((e, i) => (
                    <div className="wallet-modal__wrap" key={i}>
                        <AddWallet />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WalletModal;
