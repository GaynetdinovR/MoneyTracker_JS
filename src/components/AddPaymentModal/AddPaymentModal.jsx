import React, { useState } from 'react';
import { close } from '../../assets/icons/group.js';
import { useDispatch, useSelector } from 'react-redux';
import { addOperation } from '../../store/historySlice/historySlice.js';
import { getDate, notification } from '../../static/functions.js';
import TopSide from './components/TopSide.jsx';
import BottomSide from './components/BottomSide.jsx';
import MiddleSide from './components/MiddleSide.jsx';
import { addToWallet } from '../../store/walletSlice/walletSlice.js';

const AddPaymentModal = ({ setModal, isOpen }) => {
    const dispatch = useDispatch();

    const settings = useSelector((state) => state.settings);
    const wallets = useSelector((state) => state.wallets)

    const defaultInputValues = {
        description: '',
        category: 'other',
        sum: 0,
        operation: '+',
    };

    const [isCategoriesOpen, setCategories] = useState(false);
    const [inputValues, setInputValues] = useState(defaultInputValues);

    const handleInputChanges = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const checkValues = () => {

        if (!inputValues.sum) {
            notification('It seems you didn\'t enter the amount or entered 0', 'error')
            return false;
        }

        addPayment();
        return true;
    }

    const checkWalletSum = (operation, sum) => {

        if(operation === '-'){
            if(wallets[settings.wallet - 1].sum - sum < 0){
                notification('Your wallet doesn\'t have enough money to complete the operation', 'error')
                return false;
            }
        }

        notification('Operation is done', 'success')
        return true;
    }

    const initialData = () => {
        const dataHistory = {
            ...inputValues,
            date: getDate(),
            wallet: settings.wallet
        };

        const dataWallet = {
            wallet: dataHistory.wallet,
            sum: dataHistory.sum,
            operation: dataHistory.operation
        };

        return [dataHistory, dataWallet]
    }

    const addPayment = () => {
        const [dataHistory, dataWallet] = initialData()

        if(!checkWalletSum(dataHistory.operation, parseInt(dataHistory.sum))) return;

        dispatch(addToWallet(dataWallet));
        dispatch(addOperation(dataHistory));
    };

    const closeModal = () => {
        setModal(false);
    };

    return (
        <div
            className={isOpen ? 'modal-wrap add-payment-modal active' : 'modal-wrap add-payment-modal'}
            onClick={() => closeModal()}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__close" onClick={() => closeModal()}>
                    <img src={close} alt="close" />
                </div>

                <h3 className="modal__title"> Add payment </h3>

                <TopSide
                    isOpen={isCategoriesOpen}
                    setMenu={setCategories}
                    handleInputChanges={handleInputChanges}
                />

                <MiddleSide handleInputChanges={handleInputChanges} />

                <BottomSide close={closeModal} addPayment={checkValues} />
            </div>
        </div>
    );
};

export default AddPaymentModal;
