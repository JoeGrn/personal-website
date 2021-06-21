import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ProjectTile from '../components/ProjectTile'

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

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

    console.log(data)

    if (error) {
        return <div>{error}</div>
    }

    return (
        <Container>
            <Main>
                {data &&
                    data.map((repo) => (
                        <ProjectTile repoData={repo} key={repo.id} />
                    ))}
            </Main>
        </Container>
    )
}
