import React from 'react'

export default function StatisticPreview({ statistic }) {
    return (
        <div className="statistic-preview">
            <div className="img-circle flex align-center justify-center">
                <img className="statistic-img" src={require(`../../../assets/images/statistic/${statistic.imgName}.svg`)} alt="" />
            </div>
            <h5>{statistic.title}</h5>
            <p>{statistic.txt}</p>
        </div>
    )
}