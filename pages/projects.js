import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ProjectTile from '../components/ProjectTile'

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-wrap: wrap;
    width: 85%;
    border-left: 2px solid #eaeaea;
    border-right: 2px solid #eaeaea;
    background-color: #fff;
    z-index: 2;
`

export default function Projects() {
    const [data, setData] = useState(undefined)
    const [error, setError] = useState(undefined)
    useEffect(async () => {
        try {
            const response = await axios.get(
                `${window.location.protocol}//${window.location.host}/api/projects`
            )
            setData(response.data)
        } catch (err) {
            setError(err.message)
        }
    }, [])

    if (error) {
        return <div>{error}</div>
    }

    if (!data || data.length < 1) {
        return <div>Project data unavailable right now, please check back later.</div>
    }

    return (
        <Container>
            {data &&
                data.map((repo) => (
                    <ProjectTile repoData={repo} key={repo.id} />
                ))}
        </Container>
    )
}
