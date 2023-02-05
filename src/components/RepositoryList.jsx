import { RepositoryItem } from "./RepositoryItem"
import '../styles/repos.css'
import { useState, useEffect } from "react"

export function RepositoryList() {

    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/rafaeloliveira3/repos')
        .then(response => response.json())
        .then(data => setRepos(data))
    }, [])
    return (
        <section className="repositoryList">
            <h1>Lista de Repositórios</h1>
            <ul>
                {repos.map(item => <RepositoryItem key={item.id} repo={item} />)}
            </ul>
        </section>
    )
}