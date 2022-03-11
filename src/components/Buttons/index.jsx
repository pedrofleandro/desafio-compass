import { useState } from "react"
import { api } from "../../services/api"
import { RepositoryList } from "../RepositoryList"

import './styles.scss'

export function Buttons(props) {
    const { user } = props
    const [userData, setUserData] = useState({})
    const [repositorys, setRepositorys] = useState({})

    async function searchUser() {
        const userData = await api.get(user)

        setUserData(userData.data)   
    }

    async function handleSearchRepos(type) {     
        let response = {}

        if(type === 1){
            response = await api.get(user+'/repos')
        }else{
            response = await api.get(user+'/starred')
        }  

        if(response.data.length > 0) {
            setRepositorys(response.data)
            searchUser()
        } else {
            alert('Dados não encontrado!')
        }
    }

    return (
        <>
            <div className='search__items'>
                <button className='search__button' onClick={() => handleSearchRepos(1)}>Repos</button> 
                <button className='search__button' onClick={() => handleSearchRepos(2)}>Starred</button>
            </div>
     
            {repositorys.length > 0 && <RepositoryList userData={userData} repositorys={repositorys} />}
            
        </>
    )
}