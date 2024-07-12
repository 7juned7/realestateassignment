import React, { useContext } from 'react'
import PageContext from '../../Context/PageContext';
import post from "../../Images/Post.svg"
import cctv from "../../Images/cctv.svg"
import lift from "../../Images/ift.svg"
import car from "../../Images/car.png"
import water from "../../Images/water.svg"
import doctor from "../../Images/doctor.png"
import power from "../../Images/power.png"
import maid from "../../Images/maid.png"
import tree from "../../Images/tree.png"
import kidsplay from "../../Images/kidsplay.svg"
import sports from "../../Images/sports.svg"
const FeaturesAmenities = () => {

    const { values, handleChange } = useContext(PageContext)



    return (
        <div className="featursAmenities__container">
            <h2>General Features</h2>
            <div>

                <label className='labels'> <span>*</span> Non-Veg</label>
                <div className='flex' >

                    <div >

                        <input type="radio"
                            name='nonVeg'
                            id='Allowed'
                            value={values.nonVeg}
                            onChange={handleChange}
                        />
                        <p>Allowed</p>

                    </div>
                    <div>

                        <input type="radio"
                            name='nonVeg'
                            id='Not Allowed'
                            value={values.nonVeg}
                            onChange={handleChange} />
                        <p>Not Allowed</p>

                    </div>
                </div>
            </div>
            <div>

                <label className='labels'> <span>*</span>Elecricity</label>
                <div className='flex' style={{ margin: "1rem 0" }}>

                    <div>

                        <input type="radio"
                            name='electricity'
                            id="Rare/No Powercut"
                            value={values.electricity}
                            onChange={handleChange}
                        />
                        <p>Rare/No Powercut</p>

                    </div>
                    <div>

                        <input type="radio"
                            value={values.electricity}
                            name="electricity"
                            id="Frequent Powercut"
                            onChange={handleChange}
                        />
                        <p>Frequent Powercut</p>

                    </div>
                </div>
            </div>
            <div>

                <label className='labels'><span>*</span>Furnishing</label>
                <div className='flex' style={{ margin: "1rem 0" }}>

                    <div>

                        <input type="radio"
                            value={values.furnishing}
                            name="furnishing"
                            id="Fully Furnished"
                            onChange={handleChange}
                        />
                        <p>Fully Furnished</p>

                    </div>
                    <div>

                        <input type="radio"
                            value={values.furnishing}
                            name="furnishing"
                            id="Semi Furnished"
                            onChange={handleChange}
                        />
                        <p>Semi Furnished</p>

                    </div>
                    <div>

                        <input
                            type="radio"
                            value={values.furnishing}
                            name="furnishing"
                            id="UnFurnished"
                            onChange={handleChange}
                        />
                        <p>Unfinished</p>

                    </div>
                </div>
            </div>
            <div>

                <label className='labels'  > Additional Features</label>
                <div className='flex' style={{ margin: "1rem 0" }} >
                    <div>

                        <input
                            data-type={'additionalFeatures'}
                            type="checkbox"


                            id="Air Conditioning"
                            onChange={handleChange}
                        />
                        <p>Air Conditioning</p>

                    </div>
                    <div>

                        <input data-type={'additionalFeatures'}
                            type="checkbox"


                            id="Ceiling Fan"
                            onChange={handleChange}
                        />
                        <p>Ceiling Fan</p>

                    </div>
                    <div>

                        <input data-type={'additionalFeatures'}
                            type="checkbox"


                            id="Refrigerator"
                            onChange={handleChange}
                        />
                        <p>Refrigerator</p>

                    </div>
                    <div>

                        <input data-type={'additionalFeatures'}
                            type="checkbox"


                            id="Washing machine"
                            onChange={handleChange}
                        />
                        <p>Washing machine</p>

                    </div>
                    <div>

                        <input data-type={'additionalFeatures'}
                            type="checkbox"


                            id="Microwave"
                            onChange={handleChange}
                        />
                        <p>Microwave</p>

                    </div>
                    <div>

                        <input data-type={'additionalFeatures'}
                            type="checkbox"


                            id="oven"
                            onChange={handleChange}
                        />
                        <p>oven</p>

                    </div>
                </div>
            </div>
            <div>

                <label className='flex' >Society Amenities</label>
                <div className='flex Amenities' >

                    <div className="socialAmenities">
                        <img src={post} alt="" />
                        <p>Post</p>
                        <input
                            data-type={'socialAmenities'}
                            type="checkbox"


                            id="Post"
                            onChange={handleChange}
                        />

                    </div>
                    <div className="socialAmenities">
                        <img src={cctv} alt="" />
                        <p>CCTV Camera</p>
                        <input data-type={'socialAmenities'}
                            type="checkbox"


                            id="CCTV Camera"
                            onChange={handleChange}
                        />

                    </div>
                    <div className="socialAmenities">
                        <img src={lift} alt="" />
                        <p>Lift</p>
                        <input data-type={'socialAmenities'}
                            type="checkbox"


                            id="Lift"
                            onChange={handleChange}
                        />

                    </div>
                    <div className="socialAmenities">
                        <img src={car} alt="" />
                        <p>Reserved Parking</p>
                        <input data-type={'socialAmenities'}
                            type="checkbox"


                            id="Reserved Parking"
                            onChange={handleChange}
                        />

                    </div>
                    <div className="socialAmenities">
                        <img src={water} alt="" />
                        <p>Regular water supply</p>
                        <input data-type={'socialAmenities'}
                            type="checkbox"


                            id="Regular water supply"
                            onChange={handleChange}
                        />

                    </div>
                    <div className="socialAmenities">
                        <img src={power} alt="" />
                        <p>Power Back up-Full</p>
                        <input
                            data-type={'socialAmenities'}
                            type="checkbox"


                            id="Power Back up-Full"
                            onChange={handleChange}
                        />

                    </div>
                    <div className="socialAmenities">
                        <img src={maid} alt="" />
                        <p>Maid</p>
                        <input
                            data-type={'socialAmenities'}
                            type="checkbox"


                            id="Maid"
                            onChange={handleChange}
                        />

                    </div>
                    <div className="socialAmenities">
                        <img src={kidsplay} alt="" />
                        <p>Kids play Area</p>
                        <input
                            data-type={'socialAmenities'}
                            type="checkbox"


                            id="kids"
                            onChange={handleChange}
                        />

                    </div>
                    <div className="socialAmenities">
                        <img src={sports} alt="" />
                        <p>Sports</p>
                        <input
                            data-type={'socialAmenities'}
                            type="checkbox"


                            id="sports"
                            onChange={handleChange}
                        />

                    </div>
                    <div className="socialAmenities">
                        <img src={doctor} alt="" />
                        <p>Doctor</p>
                        <input
                            data-type={'socialAmenities'}
                            type="checkbox"


                            id="doctor"
                            onChange={handleChange}
                        />

                    </div>
                    <div className="socialAmenities">
                        <img src={tree} alt="" />
                        <p>Tree</p>
                        <input
                            data-type={'socialAmenities'}
                            type="checkbox"


                            id="tree"
                            onChange={handleChange}
                        />

                    </div>
                </div>
            </div>


        </div>
    )
}

export default FeaturesAmenities;