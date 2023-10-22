import React from 'react';
import Operation from './components/Operation.jsx';
import { useSelector } from 'react-redux';

const History = () => {
    const history = useSelector((state) => state.history);

    return (
        <section className="history">
            {history.map((el) => (
                <Operation key={el.id} data={el} />
            ))}
        </section>
    );
};

export default History;
