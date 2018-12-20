import React from 'react'

class FlexItem extends React.Component {

    render() {
        return (
            <div className="flexItem">
                <div className="grow">This is for flex grow with a default flex-shrink</div>
                <div className="shrink">flex-shrink is deactivated</div>
                <div className="basis">flex-basis: keeps the flex-item constant</div>
            </div>
        )
    }
}

export default FlexItem