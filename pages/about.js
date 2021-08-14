import React from 'react'
import styled from 'styled-components'
import Text from '../components/Text'
import Title from '../components/Title'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    z-index: 2;
    padding-top: 70px;
`

const SkillsWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    height: 100vh;
    z-index: 2;
    padding-top: 5%;
    padding-left: 10%;
    padding-right: 10%;
`

export default function About() {
    return (
        <Container>
            <SkillsWrapper>
                <Title>Skills and Technologies</Title>
                <Text>JavaScript, TypeScript, Node, Python, C, HTML, CSS.</Text>
                <Text>React, React Native, Express, Redux, MobX, Jest, RTL, TestCafe.</Text>
                <Text>Unit Testing, E2E Testing, Integration Testing.</Text>
                <Text>AWS, Docker, Kubernetes, Git.</Text>
            </SkillsWrapper>
        </Container>
    )
}
