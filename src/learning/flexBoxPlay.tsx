import React from 'react';

// A wrapper is something that convers something else

class FlexBoxPlay extends React.Component {

    render() {
        return (
            <div className="chart">
                <div className="label">Label</div>
                <div className="space" />
                <div className='barchartWrapper'>
                    <div className="price">
                        <span>240</span>
                        <span className="diamond" />
                    </div>
                    <div className="bar" />
                    <div className='originTickWrapper'>
                        <div className='tick' />
                        <div className='origin'>0</div>
                    </div>
                </div>
            </div>

        )
    }
}

export default FlexBoxPlay