import React from 'react';
import StatisticPreview from './StatisticPreview.jsx';

export default function StatisticList({ statistics }) {
    return (
        <div className="statistic-list flex">
            <img className="rect-img" src={require(`../../../assets/images/statistic/Rectangle.png`)} alt="" />
            {statistics.map((statistic, idx) => <StatisticPreview key={idx} statistic={statistic} />)}
        </div>
    )
}