import React from 'react'


class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="leftNav">
                    <div className="liveRate">
                        Live Rates
                    </div>
                </div>
                <div className="rightNav">
                    <button>Normal</button>
                    <button>WithGraph</button>
                </div>
            </div>
        )
    }
}

// {/* <div className="toggleButton">
//     <span>
//         <input type="radio" name="x" value="two" />
//     </span>
//     <span>
//         <input type="radio" name="x" value="two" />
//     </span>
//     <span>
//         <input type="radio" name="x" value="two" />
//     </span>
//     <span>
//         <input type="radio" name="x" value="two" />
//     </span>
// </div> */}
export default Header