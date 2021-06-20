import React from "react";
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 60%;
  z-index: 2;
  background-color: #fff;
  border-left: 2px solid #eaeaea;
  border-right: 2px solid #eaeaea;
`;

export default function Blog() {
    return <Container>
    <Main>
    <div>Check back soon...</div>
    </Main>
    </Container>;
}
