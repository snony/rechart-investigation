import React from 'react';



{/* <div className="barchartWrapper">
    <div className='label'></div>
    <div className='priceDiamond'>
        <div className="price2">
            240K
        </div>
        <div className="diamond2" />
    </div>
</div> */}
class FlexBoxPlay extends React.Component {

    render() {
        return (
            <div className="chart">
                <div className='priceDiamond'>

                    <div className='label'>USDJPY</div>
                    <div className="price2">
                        240K
                    </div>
                    <div className="diamond2" />
                </div>
                <div className='barchartWrapper'>
                    <div className='label'>USDJPY</div>
                    <div className='barWrapper'>
                        <div className='bar'>
                            <div className='originWrapper'>
                                <div className="originTick"></div>
                                <div className="origin">0</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default FlexBoxPlay