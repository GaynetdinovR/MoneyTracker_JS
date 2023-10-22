import React from 'react';
import { change } from '../../../assets/icons/group.js';
import { useSelector } from 'react-redux';
import { convertCurrencyfromRUB } from '../../../static/functions.js';

const Wallet = ({ wallet, setModal }) => {
    const settings = useSelector((state) => state.settings);

    const openModal = () => {
        setModal(true);
    };

    return (
        <button className="menu__wallet" onClick={() => openModal()}>
            <div className="menu__wallet-top">
                <span className="menu__wallet-name">Wallet</span>

                <div className="menu__wallet-img">
                    <img src={change} alt="change" />
                </div>

                <span className="menu__wallet-sum">
                    {convertCurrencyfromRUB(wallet.sum, settings.currency.name) }
                    {settings.currency.symbol}
                </span>
            </div>

            <div className="menu__wallet-bottom">
                <span className="menu__wallet-card-number">{wallet.number}</span>

                <span className="menu__wallet-card-date">{wallet.date}</span>
            </div>
        </button>
    );
};

export default Wallet;
