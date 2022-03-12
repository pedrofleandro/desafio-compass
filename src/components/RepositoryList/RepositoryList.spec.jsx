import React from 'react';
import { render } from "@testing-library/react"
import { RepositoryList } from '.'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
 }));

const repositorys = [
    {
        id: '1',
        name: 'repo name',
        description: 'repo desc',
        html_url: 'repo url'
    }
]

const userData = {       
    id: 60661435,
    name: 'Pedro Fragoso Leandro',
    email: 'pedrofragosoleandro@gmail.com',
    location: 'Curitiba, Paraná"',
    bio: 'Developer | Never stop learning 🍀',
    blog: 'linkedin.com/in/pedrofleandro/',
    html_url: 'https://github.com/pedrofleandro',
}

describe('RepositoryList component', () => {
    it('It renders correctly', () => {
        render(<RepositoryList userData={userData} repositorys={repositorys} />)
    })
})