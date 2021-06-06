import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
    position: absolute;
    width: 100%;
    display: flex;
    height: 100px;
    justify-content: flex-end;
    align-items: center;
`

export default function Footer() {
    return (
        <Wrapper>
            <a href="https://github.com/JoeGrn">
                <FontAwesomeIcon style={{ width: '40px', height: '40px' }} icon={faGithub} />
            </a>
            <a href="https://www.twitter.com/JoeGrn">
                <FontAwesomeIcon style={{ width: '40px', height: '40px' }} icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/jgreen96">
                <FontAwesomeIcon style={{ width: '40px', height: '40px' }} icon={faLinkedin} />
            </a>
            <a href="mailto:joseph.peter.green@gmail.com">
                <FontAwesomeIcon style={{ width: '40px', height: '40px' }} icon={faEnvelope} />
            </a>
        </Wrapper>
    )
}