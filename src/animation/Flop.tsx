import React, { useState, useEffect } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
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
            <Component />
        </Wrapper>
    )
}

export default Container