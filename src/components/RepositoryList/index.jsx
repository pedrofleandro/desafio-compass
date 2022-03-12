import { useNavigate } from 'react-router-dom';

import './styles.scss'

export function RepositoryList(props) {
    const { repositorys, userData } = props

    const navigate = useNavigate();

    return (
        <div className="repository">
            <span 
                className="repository__userName"
                onClick={() => {
                navigate("/user", { state: userData })
            }}>
                {userData.name}
            </span>
            <h2>Lista de repositórios</h2>
            <ul className="repository__list" >          
                {repositorys.map(repository => {
                    return (
                        <li key={repository.name} className="respository__item">
                            <strong>{repository.name}</strong>
                            <p>{repository.description}</p>

                            <a href={repository.html_url} target="_blank" rel="noreferrer">Acessar repositório</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}