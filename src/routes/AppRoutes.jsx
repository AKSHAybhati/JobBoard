import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SavedJobsPage from '../pages/SavedJobsPage'
import JobDetailsPage from '../pages/JobDetailsPage'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/saved' element={<SavedJobsPage/>}/>
        <Route path='/job/:id' element={<JobDetailsPage/>}/>
    </Routes>
  )
}

export default AppRoutes;
