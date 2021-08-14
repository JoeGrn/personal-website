import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Text = styled.p`
    font-size: 3rem;
    font-family: monospace;
    z-index: 2;
    border-radius: 30%;
    margin: 10px;

    @media (max-width: 600px) {
        font-size: 2rem;
    }
`

export default function Title({ children }) {
    return <Text>{children}</Text>
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
}
