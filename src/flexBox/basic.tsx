import React from 'react'
import FlexContainerProp from './flexContainer'
import FlexItem from './flexItem'

class BasicFlex extends React.Component {

    render() {
        return (
            <div>
                <ul className="ul">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                {/* <FlexContainerProp /> */}
                <FlexItem />
            </div>
        )
    }
}

export default BasicFlex