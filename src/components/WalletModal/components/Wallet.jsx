import React from 'react';
import { useSelector } from 'react-redux';
import { convertCurrencyfromRUB } from '../../../static//functions';

const Wallet = ({ wallet }) => {
    const settings = useSelector(state => state.settings)

    return (
        <button className="wallet-modal__wallet">
            <div className="wallet-modal__wallet-top">
                <span className="wallet-modal__wallet-name">Wallet</span>

                <span className="wallet-modal__wallet-balance">
                    {convertCurrencyfromRUB(wallet.sum, settings.currency.name)}
                    {settings.currency.symbol}
                </span>
            </div>

            <div className="wallet-modal__wallet-bottom">
                <span className="wallet-modal__wallet-card-number">{wallet.number}</span>

                <span className="wallet-modal__wallet-card-date">{wallet.date}</span>
            </div>
        </button>
    );
};

export default Wallet;
