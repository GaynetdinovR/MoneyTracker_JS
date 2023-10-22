import React, {useState} from "react";
import { close } from "../../assets/icons/group.js";
import { useSelector } from "react-redux";
import Currencies from "./components/Currencies.jsx";

const SettingsModal = ({isOpen, setModal}) => {
    const settings = useSelector((state) => state.settings);

    const [isCurrencyOpen, setCurrency] = useState(false);

    const closeModal = () => {
        setModal(false);
    };

    return (
        <div
            className={isOpen ? 'modal-wrap settings-modal active' : 'modal-wrap settings-modal'}
            onClick={() => closeModal()}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__close" onClick={() => closeModal()}>
                    <img src={close} alt="close" />
                </div>

                <h3 className="modal__title"> Settings </h3>

                <div className="settings-modal__left-side">
                    <Currencies isOpen={isCurrencyOpen} setMenu={setCurrency} settings={settings}/>
                </div>

            </div>
        </div>
    );
}

export default SettingsModal;