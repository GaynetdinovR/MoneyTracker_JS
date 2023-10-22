import React, { useState } from 'react';
import { close } from '../../assets/icons/group.js';
import Calendar from 'react-calendar';
import BottomSide from './components/BottomSide.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/settingsSlice/settingsSlice.js';
import { getDefaultDates } from '../../static/functions.js'

const DateModal = ({ setModal, isOpen }) => {
    const dispatch = useDispatch()
    const settings = useSelector(state => state.settings)

    const [inputValues, setInputValues] = useState(settings.historyFilter)
    const [value, changeDate] = useState(settings.historyFilter.dates)

    const closeModal = () => {
        setModal(false);
    };

    const handleInputChanges = (e) => {
        const { name, value } = e.target;

        setInputValues({ ...inputValues, [name]: value });
    };

    const handleDate = (date) => {
        changeDate(date);

        setInputValues({...inputValues, dates: date});
    } 

    const chooseDate = () => {
        dispatch(setFilter(inputValues))
        closeModal()
    }

    return (
        <div
            className={isOpen ? 'modal-wrap date-modal active' : 'modal-wrap date-modal'}
            onClick={() => closeModal()}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__close" onClick={() => closeModal()}>
                    <img src={close} alt="close" />
                </div>

                <h3 className="modal__title"> Date </h3>

                <div className="date-modal__choosed-date">
                    {settings.historyFilter.dates.map((date, i) => (
                        <span key={i}>
                            {date.toLocaleDateString()}
                            {(i === 1) ? '' : ' - '}
                        </span>
                    ))}
                </div>

                <Calendar 
                    onChange={handleDate}
                    value={value}
                    className='date-modal__calendar'
                    locale='en'
                    maxDate={new Date()}
                    selectRange={true}
                    minDate={new Date(2021, 1, 0)}
                    defaultValue={getDefaultDates()}
                />

                <BottomSide handler={handleInputChanges} onClick={chooseDate}/>

            </div>
        </div>
    );
};

export default DateModal;
