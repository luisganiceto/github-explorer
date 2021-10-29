import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

export function RepositotyList(){
    const [repositories, setRepositories] = useState([]);

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