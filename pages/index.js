import Head from "next/head";
import styled from "styled-components";

import Footer from "../components/Footer";
import Title from "../components/Title";
import AnimatedText from "../components/AnimatedText";


const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
`;

const Main = styled.main`
  padding: 10% 10%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>josephgreen.dev</title>
        <meta name="description" content="Joseph Green Personal Website" />
        <link rel="icon" href="/laptop-emoji.png" />
      </Head>

      <Main>
        <Title>Joe Green</Title>
        <AnimatedText />
      </Main>

      <Footer />
    </Container>
  );
}
