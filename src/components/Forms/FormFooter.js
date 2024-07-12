import React, { useContext } from 'react'
import PageContext from '../../Context/PageContext'

const FormFooter = () => {
    const { handleNext, formPage } = useContext(PageContext);

    return (
        <div className="form__footer">
            <div className="need_help">
                <p className='fw'>Need Help? <span className='fw' >Call 9999999999</span></p>
            </div>
            <div className='nextForm' onClick={handleNext}>
                {formPage < 6 &&
                    <>Next</>}
                {formPage === 6 && <>
                    SAVE POST</>}

            </div>
        </div>
    )
}

export default FormFooter