import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import Text from './Text'

const Container = styled.div`
    text-align: center;
    z-index: 2;
    line-height: 1.5;
`

export default function AnimatedText() {
    return (
        <Container>
            <Text>
                <Typewriter
                    options={{
                        strings: [
                            "Software Consultant.",
                            "Full Stack Engineer.",
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
