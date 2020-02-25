import React from 'react';

import About from '../cmps/main-content/About.jsx';
import CallToAction from '../cmps/main-content/CallToAction.jsx';
import Statistic from '../cmps/main-content/statistic/Statistic.jsx';

export default function Home() {
    return (
        <div>
            <About/>
            <Statistic/>
            <CallToAction/>
        </div>
    )
}
