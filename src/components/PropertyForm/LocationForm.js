import React, { useContext } from 'react'
import PageContext from '../../Context/PageContext'
import MapComponent from '../Map'

const LocationForm = () => {
    const { values, handleChange } = useContext(PageContext)


    console.log(values)
    return (
        <div className="locationform">
            <form>
                <div className='grid'>
                    <div className='flex'>
                        <div className='width' >

                            <label className='labels' >Building/Society Name <span>*</span></label>
                            <div>

                                <input type="text"
                                    value={values.buildingName}
                                    onChange={handleChange}
                                    name='buildingName'
                                    placeholder='Enter Apartment Name' />
                            </div>
                        </div>
                        <div className='width' >

                            <label className='labels' >Locality / Area <span>*</span></label>
                            <div>

                                <input
                                    value={values.locality}
                                    onChange={handleChange}
                                    name='locality'
                                    placeholder='Eg :sheetal nagar' />
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='width'>

                            <label className='labels' >Landmark / Street Name <span>*</span></label>
                            <div>

                                <input
                                    value={values.landmark}
                                    onChange={handleChange}
                                    name='landmark'
                                    placeholder='Prominant Landmark' />
                            </div>
                        </div>
                        <div className='width' >

                            <label className='labels'>City<span>*</span></label>
                            <div>
                                <select value={values.city}
                                    onChange={handleChange}
                                    name="city" >
                                    <option>Select</option>
                                    <option>Delhi</option>
                                    <option>Mumbai</option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <label>Mark Locality on Map</label>
                    <div className='map'>
                        <MapComponent />
                    </div>


                </div>
            </form>
        </div>
    )
}

export default LocationForm