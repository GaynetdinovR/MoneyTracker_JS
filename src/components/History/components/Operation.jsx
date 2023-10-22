import React from 'react';
import { convertCurrencyfromRUB, convertDate } from '../../../static/functions.js';
import { useSelector } from 'react-redux';
import { categories } from '../../../static/data.js';

const Operation = ({ data }) => {
    const settings = useSelector(state => state.settings);
    const settingsOperation = settings.historyFilter.operation

    const checkByOperation = () => {
        return (data.operation === settingsOperation || settingsOperation === '~')
    }

    const convertDateToms = (date) => {
        return Date.parse(date)
    }

    const checkByDate = () => {
        const datesInms = settings.historyFilter.dates.map(date => convertDateToms(date))
        const dateInms = convertDateToms(new Date(convertDate(data.date)))

        return (dateInms >= datesInms[0] && dateInms <= datesInms[1] )
    }

    const checkByFilter = () => {
        return (checkByDate() && checkByOperation())
    }

    if(checkByFilter()){
        return (
            <div className={`history__operation ${(data.operation === '+') ? 'green' : 'red'}`}>
                <div className="history__operation-top">
                    <span className='history__operation-balance'>
                        {data.operation}
                        { convertCurrencyfromRUB(parseInt(data.sum), settings.currency.name) }
                        {settings.currency.symbol}
                    </span>
    
                    <time className="history__operation-date" dateTime={convertDate(data.date)}>
                        {data.date}
                    </time>
    
                    <span className="history__operation-wallet">Wallet</span>
                </div>
    
                <div className="history__operation-bottom">
                    <div className="history__operation-category" style={{backgroundColor: categories[data.category].color}}>
                        <img src={categories[data.category].img} alt={data.category} />
                    </div>
    
                    <p className="history__operation-description">{data.description}</p>
                </div>
            </div>
        );
    }

};

export default Operation;
