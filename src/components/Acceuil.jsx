import React from 'react'

import { Routes, Route } from 'react-router-dom'
import ListUser from '../components/ListUser';
import DetailUser from '../components/DetailUser';
import ListPosts from '../components/ListPosts';
import './accueil.css'
export default function Accueil() {
    return (
        <div>
            <div className='Head'>les taches</div>
            <Routes>
                <Route exact path="/" element={<ListUser />} />
                <Route path='/DetailUser/:id' element={<DetailUser />} />
                <Route path='/ListPosts/:id' element={<ListPosts/>} />
            </Routes>
        </div>
    )
}