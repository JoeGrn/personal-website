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
        font-size: 0.9rem;
    }
`

export default function AnimatedText() {
    return (
        <Container>
            <Text>
                <Typewriter
                    options={{
                        strings: [
                            "I'm an Engineer.",
                            "I'm an Architect.",
                            "I'm a Designer.",
                            "I'm a Consultant.",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </Text>
        </Container>
    )
}
