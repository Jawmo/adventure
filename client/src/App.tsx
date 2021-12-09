import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeView } from './views/HomeView'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  )
}
