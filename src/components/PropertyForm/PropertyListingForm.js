import React, { useContext } from 'react'
import PageContext from '../../Context/PageContext'

import FormFooter from '../Forms/FormFooter'
import Header from '../Header'

import FeaturesAmenities from './FeaturesAmenities'
import LocationForm from './LocationForm'
import PriceDetails from './PriceDetails'
import PropertyDetail from './PropertyDetail'
import Propimages from './Propimages'

const PropertyListingForm = () => {
    const { formPage } = useContext(PageContext);
    return (<div className="container" >

        <div className="listproperty_container">
            <div className="listproperty__header">
                <ul className="listproperty__header__nav">
                    <li

                        className={formPage === 2 ? ("navNewStyle") : ("navStyle")} >PROPERTY DETAILS</li>
                    <li className={formPage === 3 ? ("navNewStyle") : ("navStyle")}  >LOCATION DETAILS</li>
                    <li className={formPage === 4 ? ("navNewStyle") : ("navStyle")} >FEATURE / AMENITIES</li>
                    <li className={formPage === 5 ? ("navNewStyle") : ("navStyle")}  >PRICE DETAILS</li>
                    <li className={formPage >= 6 ? ("navNewStyle") : ("navStyle")} >PROPERTY IMAGES</li>
                </ul>
            </div>
            {formPage === 2 && <>
                <PropertyDetail />
            </>}
            {formPage === 3 && <>
                <LocationForm />
            </>}
            {formPage === 4 && <>
                <FeaturesAmenities />

            </>}
            {formPage === 5 && <>
                <PriceDetails />
            </>}
            {formPage >= 6 && <>
                <Propimages />
            </>}








            <FormFooter />
        </div >
    </div>
    )
}

export default PropertyListingForm