/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import TeamDetail from '../pages/TeamDetail'

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/team-detail/:id' element={<TeamDetail/>}/>
      </Routes>
    </div>
  )
}

export default Path
