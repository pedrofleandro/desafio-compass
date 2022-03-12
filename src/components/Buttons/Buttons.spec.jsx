import React, {useState} from 'react';
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import { api } from "../../services/api"

import { Buttons } from '.'

const user = 'pedrofleandro'

jest.mock('../../services/api')

describe('Buttons component', () => {
    it('It renders correctly', () => {
        render(<Buttons user={user} />)
    }), 

    it('Search for repositorys', async () => {
        render(<Buttons user={user} />)

        const button = screen.getByRole("button", {name: "Repos"})
        userEvent.click(button)

        const reponse = await api.get.mockResolvedValueOnce({
            data: [
                {
                    id: '1',
                    name: 'repo name',
                    description: 'repo desc',
                    html_url: 'repo url'
                }
            ]
        })

        expect(
            React.setState = jest.fn().mockReturnValueOnce([reponse, {}])
        )
    }),
    it('Search for starred', async () => {
        render(<Buttons user={user} />)

        const button = screen.getByRole("button", {name: "Starred"})
        userEvent.click(button)

        const reponse = await api.get.mockResolvedValueOnce({
            data: [
                {
                    id: '1',
                    name: 'repo name',
                    description: 'repo desc',
                    html_url: 'repo url'
                }
            ]
        })

        expect(
            React.setState = jest.fn().mockReturnValueOnce([reponse, {}])
        )
    })

    it('Search for user data clicked in Repos', async () => {
        render(<Buttons user={user} />)

        const button = screen.getByRole("button", {name: "Repos"})
        userEvent.click(button)

        const userData = await api.get.mockResolvedValueOnce({
            data: [
                {
                    id: 60661435,
                    name: 'Pedro Fragoso Leandro',
                    email: 'pedrofragosoleandro@gmail.com',
                    location: 'Curitiba, Paraná"',
                    bio: 'Developer | Never stop learning 🍀',
                    blog: 'linkedin.com/in/pedrofleandro/',
                    html_url: 'https://github.com/pedrofleandro',
                }
            ]
        })

        expect(
            React.setState = jest.fn().mockReturnValueOnce([userData, {}])
        )
    })

    it('Search for user data clicked in Starred', async () => {
        render(<Buttons user={user} />)

        const button = screen.getByRole("button", {name: "Starred"})
        userEvent.click(button)

        const userData = await api.get.mockResolvedValueOnce({
            data: [
                {
                    id: '1',
                    name: 'Pedro Fragoso Leandro',
                    email: 'pedrofragosoleandro@gmail.com',
                    bio: 'Developer | Never stop learning 🍀',
                    blog: 'linkedin.com/in/pedrofleandro/',
                    html_url: 'https://github.com/pedrofleandro',
                }
            ]
        })

        expect(
            React.setState = jest.fn().mockReturnValueOnce([userData, {}])
        )
    })
})