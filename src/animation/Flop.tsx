import React, { useState, useEffect } from 'react'
import { Transition, animated, Spring } from 'react-spring/renderprops'
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

const pages = [
    (style: React.CSSProperties) => (
        <animated.div style={{ ...style, background: '#b3FFBD', width: "400px", height: "400px" }}>
            <div>Dangerous</div>
        </animated.div>
    ),
    (style: React.CSSProperties) => (
        <animated.div style={{ ...style, background: '#B2DBBF', width: "400px", height: "400px" }}>B</animated.div>
    ),
    (style: React.CSSProperties) => (
        <animated.div style={{ ...style, background: '#12DBBF', width: "400px", height: "400px" }}>C</animated.div>
    ),
]

const Foo: React.FC = () => {
    const [index, setIndex] = useState(0)
    const toggle = (e: number) => setIndex(e)
    return <Transition
        items={index}
        from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
        enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
        leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}>
        {index => pages[index]}
    </Transition>
}

//
interface Move {
    shouldMove: boolean
}

const CardOne: React.FC = () => {
    const [className, setClassName] = useState(0)
    useEffect(() => {

        return () => {
            setClassName(0)
        }
    })
    return (
        <DivOne >
            <button onClick={() => setClassName(className === 0 ? 1 : 0)}>Click Me</button>
            <div>
                Just for the content
        </div>
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                {props => (
                    <div style={props}>
                        Another one
                    </div>)
                }
            </Spring>
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
    const [isCardOne, setIsCardOne] = useState(0)
    const Components = {
        0: CardOne,
        1: CardTwo
    }
    return (
        <Wrapper>
            <div>
                <button onClick={() => setIsCardOne(isCardOne === 0 ? 1 : 0)}>Toggle</button>
            </div>
            <Transition
                items={isCardOne}
                config={{ tension: 100, friction: 1, precision: 0.1, }}
                from={{ opacity: 0, transform: 'translateY(-50%)' }}
                enter={{ opacity: 1, transform: 'translateY(0%)' }}
                leave={{ opacity: 0, transform: 'translateY(-50%)' }}
            >
                {index => pages[index]}
            </Transition>
            <CardOne />
            <CardTwo />
        </Wrapper>
    )
}

export default Container