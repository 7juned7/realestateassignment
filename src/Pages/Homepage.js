import React from 'react'
import Header from '../components/Header'



import "../components/styles/Homepage.css"
import PropertyFormPage from './PropertyFormPage'

const Homepage = () => {


    return (
    <>
        <Header />
    <div className="homepage container">
        <div div className="homepage__container" >
            <PropertyFormPage />

        </div >

    </div>
    </>
    )
}

export default Homepage