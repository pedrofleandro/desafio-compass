import React from 'react';
import { render } from "@testing-library/react"
import { User } from '.'

const userData = [
        {
            id: '1',
            name: 'Pedro Fragoso Leandro',
            email: 'pedrofragosoleandro@gmail.com',
            bio: 'Developer | Never stop learning 🍀',
            blog: 'linkedin.com/in/pedrofleandro/',
            html_url: 'https://github.com/pedrofleandro',
        }
    ]

describe('User component', () => {
    it('It renders correctly', () => {
        render(<User userData={userData} />)
    })
})