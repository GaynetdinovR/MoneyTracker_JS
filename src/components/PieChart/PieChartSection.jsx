import React, { useState } from 'react';
import PieChart from './components/PieChart.jsx';
import Date from './components/Date.jsx';
import DateModal from '../DateModal/DateModal.jsx';

const PieChartSection = () => {
    const [isDateOpen, setDateModal] = useState(false);

    return (
        <section className="piechart">
            <Date setModal={setDateModal}/>
            <PieChart />
            <DateModal isOpen={isDateOpen} setModal={setDateModal}/>
        </section>
    );
};

export default PieChartSection;
