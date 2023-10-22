import React, { useState } from 'react';
import { settings } from '../../assets/icons/group.js';
import Wallet from './components/Wallet.jsx';
import WalletModal from '../WalletModal/WalletModal.jsx';
import { useSelector } from 'react-redux';
import AddPaymentModal from '../AddPaymentModal/AddPaymentModal.jsx';
import AddPayment from './components/AddPayment.jsx';
import SettingsModal from '../SettingsModal/SettingsModal.jsx';

const Menu = () => {
    const wallet = useSelector((state) => state.wallets.filter((wallet) => wallet.chosen)[0]);
    const [isWalletOpen, setWalletModal] = useState(false);
    const [isAddPaymentOpen, setAddPaymentModal] = useState(false);
    const [isSettingsOpen, setSettingsModal] = useState(false);

    return (
        <aside className="menu">
            <Wallet setModal={setWalletModal} wallet={wallet} />

            <button className="menu__settings" onClick={() => setSettingsModal(true)}>
                <img src={settings} alt="settings" />
            </button>

            <AddPayment setModal={setAddPaymentModal} />

            <WalletModal isOpen={isWalletOpen} setModal={setWalletModal} />
            <AddPaymentModal isOpen={isAddPaymentOpen} setModal={setAddPaymentModal} />
            <SettingsModal isOpen={isSettingsOpen} setModal={setSettingsModal}/>
        </aside>
    );
};

export default Menu;
