import React from 'react'
import Header from '../components/Header'
import StartingForm from '../components/StartingForm'
import tick from "../Images/Tick.svg"

const Home = () => {
    return (<div style={{ backgroundColor: "hsla(213, 60%, 18%, 1)" }}>
        <Header />
        <div className='container'>

            <div className="home">
                <div className="home__header">
                    <h1>Sell or Rent your Property For Free</h1>
                    <p>Whether you’re ready to sell or looking for answers, we’ll guide you with data and expertise specific to your needs.</p>
                </div>
                <div className="home__content">
                    <div className="steps">
                        <h2>Upload your property in 4 simple steps</h2>
                        <div className="step">
                            <img src={tick} alt="" />
                            <p>Add your properties <span className='fw'>Basic Details</span> </p>
                        </div>
                        <div className="step">
                            <img src={tick} alt="" />
                            <p>Add property <span className='fw'>Location</span></p>
                        </div>
                        <div className="step">
                            <img src={tick} alt="" />
                            <p>Add property <span className='fw'>Features and amenities</span></p>
                        </div>
                        <div className="step">
                            <img src={tick} alt="" />
                            <p>Add <span className='fw' >Price details</span></p>
                        </div>
                        <div className="step">
                            <img src={tick} alt="" />
                            <p>Add your best <span className='fw' >Property Shots</span></p>
                        </div>
                    </div>
                    <div className="form">
                        <StartingForm />
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Home;