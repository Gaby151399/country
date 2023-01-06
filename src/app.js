import React from 'react'
import Pays from './components/Pays'
import "../src/css/bootstrap.css"
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'

export default function app() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Pays/>}/>
      </Routes>
    </div>
  )
}
