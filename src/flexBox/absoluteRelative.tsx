import React from 'react'

class AbsoluteAndRelative extends React.Component {

    render() {

        return (
            <div>
                <div className="relative">
                    <div className="rel">This is for relative</div>
                    <div className="rel">This is for relative, This is for relative, This is for relative, This is for relative</div>
                </div>
                <div className="absolute">
                    <div className="abs">This is for Absolute</div>
                    <div className="abs">This is for Absolute, This is for Absolute, This is for Absolute,This is for Absolute</div>
                </div>
            </div>

        )
    }
}


export default AbsoluteAndRelative