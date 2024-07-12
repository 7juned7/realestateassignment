

import React, { useContext } from 'react'
import PageContext from '../../Context/PageContext'
import "../styles/Otp.css"

const OTP = () => {
    const { values, handleChange } = useContext(PageContext)

    return (
        <div className="otp_container">
            <div>
                <div className="label">
                    <p>Enter OTP sent on 999-999-9999 <span style={{ color: "red" }} >*</span></p>
                    <p className="change__otp">Change</p>
                </div>
                <input type="number" placeholder='0 0 0 0'
                    name='otp'
                    value={values.otp}
                    onChange={handleChange} />
                <p className="resend__otp">Resend OTP</p>
            </div >
        </div >
    )
}

export default OTP