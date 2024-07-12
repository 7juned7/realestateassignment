import React, { useContext } from 'react'
import PageContext from '../Context/PageContext';
import ConfirmationPage from './ConfirmationPage';
import Home from './Home'
import Homepage from './Homepage';

const SellerHomePage = () => {
    const { formPage } = useContext(PageContext);
    return (
        <div>{formPage < 2 && (<>
            <Home />
        </>)}
            {formPage <= 7 && formPage >= 2 && (<>
                <Homepage />
            </>)}

            {formPage === 8 && (<>
                <ConfirmationPage />
            </>)}

        </div>

    )
}

export default SellerHomePage;