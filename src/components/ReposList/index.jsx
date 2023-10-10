import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({ userName }) => {
    const [arrayRepos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${userName}/repos`)
            .then(response => {
                setErro(null)
                if (!response.ok) {
                    throw new Error(`Usuário não encontrado (Status: ${response.status})`);
                }
                return response.json()
            })
            //elemento do arronFunction é as consultas do JSON
            .then(reposJson => {
                setTimeout(()=> {
                    setEstaCarregando(false)
                    setRepos(reposJson)
                },2000)
            })
            .catch(error => {
                setErro(error.message);
            });
    }, [userName]);

    if (erro) {
        return (
            <div className="container">
                <h2>{erro}</h2>
            </div>
        );
    }

    return (
        <div className="container">
            {estaCarregando ? (
                <h2>carregando ... </h2>
            ) : (
                <ul className={styles.list}>
                    {arrayRepos.map(({ name, language, html_url, id }, index) => (
                        <li key={id} className={styles.listItem}>
                            <h2>Número do repositório: {index + 1}</h2>
                            <div className={styles.itemName}>
                                <b>Nome: </b>{name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> {language}
                            </div>
                            <a href={html_url} target="_blank" className={styles.itemLink}>Acesse aqui</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ReposList;
