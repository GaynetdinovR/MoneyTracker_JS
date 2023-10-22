import React from 'react';

import PieChartSection from './PieChart/PieChartSection.jsx';
import History from './History/History.jsx';
import Menu from './Menu/Menu.jsx';

export default class App extends React.Component {
    render() {
        return (
            <main>
                <PieChartSection />
                <History />
                <Menu />
            </main>
        );
    }
}
