import React from 'react';
import { Pie } from 'react-chartjs-2';
import { categories } from '../../../static/data.js'
import { formatCategoriesNames, getUsedCategories, getUsedData, getUsedColors } from '../../../static/functions.js'
import 'chart.js/auto';
import { useSelector } from 'react-redux';

const PieChart = () => {
    const history = useSelector(state => state.history)

    const usedCategories = getUsedCategories(history) 
    const usedBackgroundColors = getUsedColors(categories, usedCategories)
    const usedData = getUsedData(history, usedCategories)

    const pieChartData = {
        labels: formatCategoriesNames(usedCategories),
        datasets: [
            {
                data: usedData,
                label: 'sum',
                backgroundColor: usedBackgroundColors
            }
        ]
    };

    const pieOptions = {
        plugins: {
            legend: {
                display: true,
                onClick: false,
                position: 'bottom'
            }
        }
    };

    return (
        <div className="piechart__chart">
            <Pie type="pie" data={pieChartData} options={pieOptions} />
        </div>
    );
};

export default PieChart;
