import React from 'react'


export default class extends React.Component {

    render() {
        return (
            <div className="clock">
                <div className='subjectTitle'>Balancing Equation</div>
                <div className="watchWrapper">
                    <div className="watch">
                        <h4>12:30:58</h4>
                    </div>
                    <div className="icon">
                        play or pause
                    </div>
                    <div className="extraWatchInfo">
                        <span>Target Time</span>
                        <span>Scheduled?</span>
                    </div>
                </div>
            </div>
        )
    }
}