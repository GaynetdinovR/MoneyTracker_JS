import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCurrencyInSettings } from '../../../store/settingsSlice/settingsSlice.js';

const Currencies = ({ isOpen, setMenu, settings }) => {
    const dispatch = useDispatch();

    const currencies = [
        {
            symbol: '£',
            name: 'GBP'
        },
        {
            symbol: '€',
            name: 'EUR'
        },
        {
            symbol: '$',
            name: 'USD'
        },
        {
            symbol: '₽',
            name: 'RUB'
        },
    ];

    const [currencySymbol, setCurrencySymbol] = useState(settings.currency.symbol);

    const closeModal = () => {
        setMenu(false);
    };

    const setCurrency = (data) => {
        setCurrencySymbol(data.symbol);

        dispatch(changeCurrencyInSettings(data));
    }

    return (
        <div className="settings__currencies grid-menu currencies">
            <span className='currencies__label'>
                Currency:
            </span>

            <button className="grid-menu__btn" onClick={() => setMenu(true)}>
                {currencySymbol}
            </button>

            <div
                className={isOpen ? 'grid-menu__wrap active' : 'grid-menu__wrap'}
                onClick={() => closeModal()}>
                <div className="grid-menu__content" onClick={(e) => e.stopPropagation()}>
                    {currencies.map((elem, i) => {
                        return (
                            <button
                                key={i}
                                className="grid-menu__element"
                                onClick={() => {
                                    setCurrency(elem);
                                    closeModal();
                                }}>
                                {elem.symbol}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Currencies;
