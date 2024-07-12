import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import PageContextProvider from '../Context/PageContext';

const Confirmation = () => {
    const { formPage, setFormPage } = useContext(PageContextProvider)
    const handleClick = () => {
        setFormPage((formPage + 1))
    }


    return (
        <div className="confirmation">


            <h2>POST PROPERTY ON DYLAN ESTATE?</h2>
            <button type="submit" className='submit' onClick={handleClick} >Continue</button>
            <p style={{ color: "blue", marginTop: "-1rem" }}>By continuing you agree to our Terms and Conditions & Privacy Policy</p>
        </div>
    )
}

export default Confirmation