import React, { useState } from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column
`

const CardOne: React.FC = () => (
    <div>
        This is for card one
    </div>
)

const CardTwo: React.FC = () => (
    <div>
        This is for card two
    </div>
)

const Container: React.FC = () => {
    const [isCardOne, setIsCardOne] = useState(true)
    console.log(isCardOne, setIsCardOne)
    return (
        <Wrapper>
            <div>
                <button onClick={() => setIsCardOne(!isCardOne)}>Toggle</button>
            </div>
            <CardOne />
            <CardTwo />
        </Wrapper>
    )
}

export default Container