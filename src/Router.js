import React from 'react'
import App from './App'
import {Routes,Route} from 'react-router-dom'
import Create from './Create'
import Edit from './Edit'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
    </Routes>
  )
}

export default Router