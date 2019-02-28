import React, { useState, useEffect } from 'react'
import { Transition } from 'react-spring/renderprops'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column
    height: 100%;
    background-color: white;
`

const DivOne = styled.div`
    background-color: grey;
`

const Child = styled.div`

`

const DivTwo = styled.div`
    background-color: red;
`

const Foo: React.FC = () => {
    return <Transition
        items={[{ key: 'stuff', toggle: true }]}
        from={{ position: 'absolute', opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}>
        {toggle =>
            toggle
                ? props => <div style={props}>Show Me Nothing</div>
                : props => <div style={props}>Show Me</div>
        }
    </Transition>
}
interface Move {
    shouldMove: boolean
}

const CardOne: React.FC = () => {
    const [className, setClassName] = useState('moveIn')
    useEffect(() => {

        return () => {
            setClassName("moveOut")
        }
    })
    return (
        <DivOne >
            <button>Click Me</button>
            <div>
                Just for the content
        </div>
            <div>
                Another one
        </div>
        </DivOne>)
}

const CardTwo: React.FC = () => {
    const [className, setClassName] = useState('moveIn')
    useEffect(() => {

    })
    return (
        <DivTwo>
            This is for card one
        </DivTwo>
    )
}

const Container: React.FC = () => {
    const [isCardOne, setIsCardOne] = useState(true)
    const Component = isCardOne ? CardOne : CardTwo
    return (
        <Wrapper>
            <div>
                <button onClick={() => setIsCardOne(!isCardOne)}>Toggle</button>
            </div>
            <Foo />
        </Wrapper>
    )
}

export default Container