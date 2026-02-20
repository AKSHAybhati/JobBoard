import React from 'react'
import MainLayout from '../layouts/MainLayout'
import SavedJobList from '../features/saved/components/SavedJobList'

const SavedJobsPage = () => {
  return (
    <>
        <MainLayout>
            <SavedJobList/>
        </MainLayout>
    </>
  )
}

export default SavedJobsPage;
