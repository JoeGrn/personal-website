import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

const Container = styled.div`
    text-align: center;
    z-index: 9999;
    line-height: 1.5;
`

const Text = styled.div`
    background: #c0c0c0;
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 1.3rem;
    font-family: monospace;

    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
`

export default function AnimatedText() {
    return (
        <Container>
            <Text>
                <Typewriter
                    options={{
                        strings: [
                            "Full Stack Engineer and Consultant.",
                            "Keen to build high impact products.",
                            "Based in the UK.",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
                
            </Text>
        </Container>
    )
}
