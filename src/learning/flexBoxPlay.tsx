import React from 'react';



class FlexBoxPlay extends React.Component {

    render() {
        return (
            <div className="chart">
                {/* TODO ML change below component to Price Label wrapper */}
                {/* <div className='priceLabelWrapper'>
                    <div className='label'></div>
                    <div className='priceLabelOffsetWrapper'>
                        <div className="offset"></div>
                        <div className="priceDiamondWrapper">
                            <div className="price">
                                240K
                            </div>
                            <div className="diamond" />
                        </div>
                    </div>
                </div> */}
                <div className="barchartWrapper">
                    <div className='label'></div>
                    <div className='priceDiamond'>
                        <div className="price2">
                            240K
                        </div>
                        <div className="diamond2" />
                    </div>
                </div>
                <div className='barchartWrapper'>
                    <div className='label'>USDJPY</div>
                    <div className='barWrapper'>
                        <div className='bar'></div>
                        <div className='originWrapper'>
                            <div className="originTick"></div>
                            <div className="origin">0</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default FlexBoxPlay