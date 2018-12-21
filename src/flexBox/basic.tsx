import React from 'react'
import FlexContainerProp from './flexContainer'
import FlexItem from './flexItem'
import AbsoluteAndRelative from './absoluteRelative'
import AutoMargin from './autoMargin'
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
                <AbsoluteAndRelative />
                <AutoMargin />
            </div>
        )
    }
}

export default BasicFlex