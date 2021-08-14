import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledText = styled.p`
    background: #c0c0c0;
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 1.3rem;
    font-family: monospace;
    margin: 10px;
    display: block;

    @media (max-width: 600px) {
        font-size: 0.9rem;
    }
`

export default function Text({ children }) {
    return <StyledText>{children}</StyledText>
}

Text.propTypes = {
    children: PropTypes.node.isRequired,
}
