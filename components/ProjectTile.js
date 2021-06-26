import React from 'react'
import styled from 'styled-components'

const Tile = styled.div`
    border: 2px solid #a9a9a9;
    width: 33%;
    height: 200px;
    margin: 20px;
    border-radius: 15px;
`

export default function ProjectTile({ repoData }) {
    console.log(repoData)
    return (
        <Tile>

        </Tile>
    )
}
