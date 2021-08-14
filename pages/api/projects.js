import axios from 'axios'

export default async (req, res) => {
    let response;

    try {
        response = await axios.get('https://api.github.com/users/JoeGrn/repos');
    } catch (err) {
        res.status(err.status).json({ error: err })
    }

    const repos = response.data.reduce((acc, cur) => {
        acc.push({
            name: cur.name,
            description: cur.description,
            language: cur.language,
            id: cur.id,
        })
        return acc;
    }, [])

    // const mocks = [
    //     { name: 'hello', description: ' world', language: 'C', id: 1 },
    //     { name: 'hello', description: ' world', language: 'C', id: 2 },
    //     { name: 'hello', description: ' world', language: 'C', id: 3 },
    //     { name: 'hello', description: ' world', language: 'C', id: 4 },
    // ]

    res.status(200).json(repos)
}
