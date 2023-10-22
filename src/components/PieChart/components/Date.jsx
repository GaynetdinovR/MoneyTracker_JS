import React from 'react';
import { calendar } from '../../../assets/icons/group.js';
import { useSelector } from 'react-redux';

const Date = ({setModal}) => {
    const settings = useSelector(state => state.settings)

    const getOperationClass = () => {
        switch(settings.historyFilter.operation){
            case '+': return 'green'
            case '-': return 'red'
            default: return
        }
    }

    return (
        <button className="piechart__date" id="piechart_date" onClick={() => setModal(true)}>
            <div className="piechart__date-img">
                <img src={calendar} alt="calendar" />
            </div>

            <span className={`piechart__date-type ${getOperationClass()}`}>{settings.historyFilter.operation}</span>

            <p className="piechart__date-text">
                <time dateTime="2023-07-10">{settings.historyFilter.dates[0].toLocaleDateString()}</time>
                <span> - </span>
                <time dateTime="2023-08-10">{settings.historyFilter.dates[1].toLocaleDateString()}</time>
            </p>
        </button>
    );
};

export default Date;
