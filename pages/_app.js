import Particles from 'react-particles-js'
import styled from 'styled-components'

import '../styles/globals.css'
import particlesConfig from '../config/particlesConfig'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
`

function MyApp({ Component, pageProps }) {
    return (
        <Container>
            {/* <Navbar /> */}
            <Particles
                style={{ position: 'absolute'}}
                height="100%"
                width="100%"
                params={particlesConfig}
            />
            <Component {...pageProps} />
            <Footer />
        </Container>
    )
}

export default MyApp
