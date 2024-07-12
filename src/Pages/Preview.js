import React, { useContext } from 'react'
import Header from '../components/Header'
import "../components/styles/Preview.css"
import PageContext from '../Context/PageContext'
import "../components/styles/Header.css"
const Preview = () => {
    const { values, socialAmenities, additionalFeatures, bhkType, residentalType } = useContext(PageContext)
    console.log(additionalFeatures)
    return (<div>
        <Header />
        <div className='container'>
            <div className="preview_container">
                <img src="" />
                <h2>{bhkType} {residentalType} For {values.propertyFor} in {values.buildingName}
                    {values.builtUpArea} Sq.Ft</h2>
                <div className="address">
                    <p>{values.buildingName} {values.locality}, near {values.landmark}</p>
                    <div>
                        <img src="" />
                        <img src="" />
                    </div>
                </div>
                <div className="appartment_photos">
                    <div className="propimages__container">

                        <div className="upload_images">
                            <img src="" />
                            <button className='add_photo' >+ Add Photos Now</button>
                        </div>


                    </div>
                </div>
                <div className="propertyOverview">
                    <div className='flex'><h2>Property Overview</h2>
                        <p>Society: {values.buildingName}</p></div>

                    <div >
                        <div>
                            {additionalFeatures ?
                                (
                                    <div className='overviews'>
                                        {additionalFeatures.map(((data, index) => {
                                            return <div key={index} >{data}</div>
                                        }))}
                                    </div>) : (<>
                                        Noting selected</>)}
                        </div>

                    </div>
                    <div className='flex' ><h2>Amenities</h2></div>
                    <div className="amenities">
                        <div>
                            {socialAmenities ? (<div className='overviews'>
                                {socialAmenities.map(((data, index) => {
                                    return <div>
                                        <div key={index} className='rendered_amenities' dangerouslySetInnerHTML={{ __html: data }} />
                                    </div>
                                }))}
                            </div>) : (<>
                                Nothing selected</>)}
                        </div>
                    </div>
                    <div className="description">
                        <div className='flex' ><h2>Description</h2></div>
                        <p>{values.propDes}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Preview