import React from 'react'
import FlexContainerProp from './flexContainer'

class BasicFlex extends React.Component {

    render() {
        return (
            <div>
                <ul className="ul">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <FlexContainerProp />
            </div>
        )
    }
}

export default BasicFlex