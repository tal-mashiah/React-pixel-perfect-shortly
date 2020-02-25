import React, { Component } from 'react'
import StatisticList from './StatisticList.jsx';

export default class Statistic extends Component {
    state = {
        statistics: [
            {
                title: 'Brand Recognition',
                imgName: 'icon-brand-recognition',
                txt: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
            },
            {
                title: 'Detailed Records',
                imgName: 'icon-detailed-records',
                txt: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
            },
            {
                title: 'Fully Customizable',
                imgName: 'icon-fully-customizable',
                txt: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
            },
        ]
    }
    render() {
        const { statistics } = this.state
        console.log(statistics);
        return (
            <div className="statistic">
                <div className="statistic-header">
                    <h4>Advanced Statistics</h4>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
                <StatisticList statistics={statistics} />
            </div>
        )
    }
}

