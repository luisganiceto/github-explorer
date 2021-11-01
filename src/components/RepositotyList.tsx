import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

export function RepositotyList(){
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect( () => {
        fetch('https://api.github.com/users/luisganiceto/repos')        
            .then(response => response.json())
            .then(data => setRepositories(data))
    } , [repositories])

    return(
        <section className="repository-list">
            <h1>Lista de Repositóro</h1>

            <ul>
                {
                    repositories.map(repository => {
                        return <RepositoryItem key={repository.id} repository={ repository } />                                        
                    })
                }
            </ul>
        </section>
    );
}