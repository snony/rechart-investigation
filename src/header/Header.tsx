import React from 'react'


class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="leftNav">
                    <div className="liveRate">
                        Live Rates
                    </div>
                    <div className="toggleButton">
                        <span>
                            <input type="radio" name="x" value="two" />
                        </span>
                        <span>
                            <input type="radio" name="x" value="two" />
                        </span>
                        <span>
                            <input type="radio" name="x" value="two" />
                        </span>
                        <span>
                            <input type="radio" name="x" value="two" />
                        </span>
                    </div>
                </div>
                <div className="rightNav">
                    This is with the svg stuff maybe?
                    <div onContextMenu={(e) => { console.log(e) }}>
                        Lorem Ipsum
                    </div>
                </div>
            </div>
        )
    }
}

export default Header