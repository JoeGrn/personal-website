import React from 'react'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'

export const Name = styled.code`
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;
`

export const TextWrapper = styled.p`
    line-height: 1.5;
    font-size: 1.5rem;
    text-align: center;
`

export const Code = styled.code`
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    line-height: 1.5;
    font-size: 1.5rem;
`

const Title = () => {
    return (
        <>
            <Name>
                Joseph Green
            </Name>
            <TextWrapper>
            <Code>
                <Typewriter
                    options={{
                        strings: ['I\'m an engineer.', 'I\'m an architect.', 'I\'m a designer.', 'I\'m a consultant.'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </Code>
            </TextWrapper>
        </>
    )
}

export default Title;