import Head from 'next/head'
import styled from 'styled-components'

import Title from '../components/Title'
import AnimatedText from '../components/AnimatedText'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    width: 100%
`

const Main = styled.main`
    padding: 10% 10%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    @media (max-width: 600px) {
        padding: 40% 10%;
    }
`

export default function Home() {
    return (
        <Container>
            <Head>
                <title>joegreen.dev</title>
                <meta
                    name="description"
                    content="Joseph Green Personal Website"
                />
                <link rel="icon" href="/laptop-emoji.png" />
            </Head>

            <Main>
                <Title>Joe Green</Title>
                <AnimatedText />
            </Main>
        </Container>
    )
}
