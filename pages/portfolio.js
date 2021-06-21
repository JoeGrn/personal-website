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
  width: 85%;
  z-index: 2;
  background-color: #fff;
  border-left: 2px solid #eaeaea;
  border-right: 2px solid #eaeaea;
`;

export default function Portfolio() {
    return <Container>
        <Main>
        <div>Check back soon...</div>
        </Main>
    </Container>;
}
