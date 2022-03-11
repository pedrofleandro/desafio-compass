import React from 'react'
import { Route, Routes } from 'react-router-dom';
import  User  from './pages/User'
import  Home  from './pages/Home'

export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
        </Routes>
    )
}