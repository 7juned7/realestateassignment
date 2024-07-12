import React, { useContext } from 'react'
import PageContext from '../Context/PageContext';
import FormFooter from './Forms/FormFooter';
import OTP from './Forms/OTP';
import "./styles/Startingform.css"
const StartingForm = () => {
    const { formPage, values, handleChange } = useContext(PageContext)







    return (
        <div className="startingform__container">

            <form className='startingform' >
                <div className="form__head">
                    <h2>LETS GET YOU STARTED!</h2>
                </div>
                <div className="form__content">
                    {formPage === 0 && <> <div>
                        <label className='labels' > <span>*</span> I am:</label>
                        <div className='flex'>
                            <div className='flex'>
                                <input
                                    type="radio"
                                    id="Owner"
                                    name="iam"
                                    value={values.iam}
                                    onChange={handleChange}

                                />
                                Owner
                            </div>

                            <div className='flex' >
                                <input

                                    type="radio"
                                    id="Builder"
                                    name="iam"
                                    value={values.iam}
                                    onChange={handleChange}

                                />
                                Builder
                            </div>

                        </div>
                    </div>
                        <div>
                            <label className='labels'>Your Name <span>*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='flexcol'>
                            <label className='labels'>Country</label>
                            <select id="country" name="country"
                                value={values.country}
                                onChange={handleChange}

                            >
                                <option >Select</option>
                                <option >India</option>
                                <option >PAKISTAN</option>
                                <option >AUSTRALIA</option>
                                <option >USA</option>
                            </select>
                        </div>
                        <div>
                            <label className='labels' >Phone <span>*</span> </label>
                            <input
                                type="number"
                                id="phone"
                                name="phone"
                                value={values.phone}

                                onChange={handleChange}

                            />
                            <div>OR</div>
                            <label className='flex' htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}

                            />
                        </div></>}

                    {formPage === 1 && <OTP />}
                </div>


            </form>
            <FormFooter />

        </div>
    )
}

export default StartingForm