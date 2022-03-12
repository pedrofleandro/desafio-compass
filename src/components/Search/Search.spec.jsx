import React from 'react';
import { render } from "@testing-library/react"
import { Search } from '.'

describe('Search component', () => {
    it('It renders correctly', () => {
        render(<Search />)
    })
})