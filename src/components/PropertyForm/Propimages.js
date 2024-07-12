import React, { useContext } from 'react'
import PageContext from '../../Context/PageContext';
import Confirmation from '../Confirmation';
import "../styles/Listproperty.css"
const Propimages = () => {
    const { formPage } = useContext(PageContext);
    
    return (
        <div className="propimages__container">
            <p>Add Photos / videos to attract more tenants</p>
            <p>Add Photos of living room, bedroom, bathroom, floor, doors, kitchen, balcony, location map, neighborhood, et</p>
            <div className="upload_images">
                <img src="" alt="" />
                <button className='add_photo' >+ Add Photos Now</button>
            </div>
            {
                formPage == 7 && <>
                    <Confirmation />
                </>
            }

        </div>
    )
}

export default Propimages;