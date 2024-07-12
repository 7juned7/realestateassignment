import React, { useContext } from 'react'
import PageContext from '../../Context/PageContext'

const PropertyDetail = () => {

    const { values, handleChange, balcony } = useContext(PageContext)



    return (
        <form className='propdetails'>
            <div>
                <label className='labels' > <span>*</span> Property For:</label>
                <div className='flex' style={{ width: "50%" }}>

                    <div>
                        <input
                            type="radio"
                            name="propertyFor"
                            id="Rent"
                            value={values.propertyFor}
                            onChange={handleChange}
                        />
                        <p>Rent</p>
                    </div>
                    <div>
                        <input
                            type="radio"
                            value={values.propertyFor}
                            id='Sale'
                            name="propertyFor"
                            onChange={handleChange}
                        />
                        <p>Sale</p>

                    </div>

                </div>
            </div>

            <div>
                <div >

                    <label className='labels' ><span>*</span> Property Type:</label>
                    <div className='flex' style={{ margin: "2rem 0" }}>
                        <div>
                            <input
                                type="radio"
                                value={values.propertyType}
                                id="Residental"
                                name="propertyType"
                                onChange={handleChange}
                            />
                            <p>Residential</p>
                        </div>

                        <div>
                            <input
                                type="radio"
                                value={values.propertyType}
                                name="propertyType"
                                id='Commercial'
                                onChange={handleChange}
                            />
                            <p>Commercial</p>
                        </div>
                        <div>
                            <input
                                type="radio"
                                value={values.propertyType}
                                name="propertyType"
                                id="Land/Plot"
                                onChange={handleChange}

                            />
                            <p>Land/Plot</p>
                        </div>


                    </div>
                    {values.propertyType === "Residental" && <div className='flex' style={{ width: "min-content" }} >
                        <option data-option={"option"}
                            data-name={"residentalType"}
                            id='Flat/Apartment'



                            onClick={handleChange}
                        >Flat/Apartment</option>
                        <option
                            data-option={"option"}
                            data-name={"residentalType"}
                            id='HouseVilla'



                            onClick={handleChange}
                        >House/Villa</option>
                    </div>}
                    {values.propertyType === "Commercial" && <div className='flex propType '  >
                        <option
                            data-option={"option"}
                            data-name={"residentalType"}
                            id='Office Space'



                            onClick={handleChange}
                        >Office Space</option>
                        <option
                            data-option={"option"}
                            data-name={"residentalType"}
                            id='Co Working'



                            onClick={handleChange}
                        >Co Working</option>
                        <option
                            data-option={"option"}
                            data-name={"residentalType"}
                            id='Restaurant/Cafe'



                            onClick={handleChange}

                        >Restaurant/Cafe</option>
                        <option
                            data-option={"option"}
                            data-name={"residentalType"}
                            id='Shop/Showroom'



                            onClick={handleChange}

                        >Shop/Showroom</option>
                        <option
                            data-option={"option"}
                            data-name={"residentalType"}
                            id='Industrial Bldg.'



                            onClick={handleChange}>Industrial Bldg.</option>
                        <option
                            data-option={"option"}
                            data-name={"residentalType"}
                            id='Industrial'



                            onClick={handleChange}
                        >Industrial</option>
                        <option
                            data-option={"option"}
                            data-name={"residentalType"}
                            id='Warehouse/Godown'



                            onClick={handleChange}
                        >Warehouse/Godown</option>

                    </div>}
                </div>
                <div className="grid">
                    <div className='flex'>
                        <div className='width'>
                            <p className='labels' >Built up Area <span>*</span></p>
                            <input className='sqFt'
                                type="number"
                                value={values.builtUpArea}
                                name="builtUpArea"
                                placeholder='Sq.Ft.'


                                onChange={handleChange}
                            />


                        </div >
                        <div className='width'>
                            <p className='labels' >Carpet Area <span>*</span></p>
                            <input
                                className='sqFt'
                                type="text"
                                value={values.carpetArea}
                                name="carpetArea"
                                placeholder='Sq.Ft.'

                                onChange={handleChange}
                            />


                        </div>
                    </div>
                    <div className='subGrid'>
                        <div className='flex'>
                            <div>
                                <p className='labels' >Property on Floor <span>*</span></p>
                                <input
                                    type="text"
                                    value={values.propFloorArea}
                                    name="propOnFloor"
                                    onChange={handleChange}
                                    placeholder="Floor"
                                />
                            </div>
                            <div>
                                <p className='labels' >Total Floor <span>*</span></p>
                                <input
                                    type="text"
                                    value={values.totalFloor}
                                    name="totalFloor"
                                    onChange={handleChange}
                                    placeholder="Total Floor"
                                />


                            </div>
                        </div>

                        <div >
                            <label className='labels'  > <span>*</span> Property Facing </label>
                            <select style={{ marginTop: ".5rem" }} value={values.propFacing} name="propFacing" onChange={handleChange} >
                                <option>North</option>
                                <option>South</option>
                                <option>East</option>
                                <option>North-East</option>
                            </select>


                        </div>


                    </div>
                    <div>
                        <label className='labels'>BHK Type <span>*</span></label>
                        <div className="propAge flex">
                            <option data-type={"bhk"}
                                name="bhkType"
                                id='1RK'




                                onClick={handleChange}>1 RK</option>
                            <option data-type={"bhk"}
                                data-name={"bhkType"}
                                id='1BHK'



                                onClick={handleChange}>1 BHK</option>
                            <option data-type={"bhk"}
                                data-name={"bhkType"}
                                id='2BHK'



                                onClick={handleChange}>2 BHK</option>
                            <option data-type={"bhk"}
                                data-name={"bhkType"}
                                id='3BHK'



                                onClick={handleChange}>3 BHK</option>
                            <option data-type={"bhk"}
                                data-name={"bhkType"}
                                id='4RK'



                                onClick={handleChange} >4 BHK</option>
                            <option data-type={"bhk"}
                                data-name={"bhkType"}
                                id='5BHK+'



                                onClick={handleChange} >5+ BHK</option>
                        </div>

                    </div>
                    <div>
                        <label className='labels' >Balcony <span>*</span></label>
                        <div className="balcony flex">
                            <option
                                data-type={"balcony"}
                                data-name={"balcony"}
                                id='0'

                                value={balcony}

                                onClick={handleChange}>0</option>
                            <option data-type={"balcony"}
                                data-name={"balcony"}
                                id='1'

                                value={balcony}

                                onClick={handleChange}>1</option>
                            <option data-type={"balcony"}
                                data-name={"balcony"}
                                id='2'

                                value={balcony}

                                onClick={handleChange}>2 </option>
                            <option data-type={"balcony"}
                                data-name={"balcony"}
                                id='3'

                                value={balcony}

                                onClick={handleChange}>3 </option>
                            <option data-type={"balcony"}
                                data-name={"balcony"}
                                id="4+"

                                value={balcony}

                                onClick={handleChange}>4+</option>
                        </div>

                    </div>
                    {/* <div>
                        <label className='flex'>Tenant Preference <span>*</span></label>
                        <div className="preference flex">
                            <option
                                data-type={"tenant"}
                                data-name={"tenant"}
                                id='Any'


                                onClick={handleChange}>Any</option>
                            <option data-type={"tenant"}
                                data-name={"tenant"}
                                id='Family'
                                onClick={handleChange} >Family</option>
                            <option data-type={"tenant"}
                                data-name={"tenant"}
                                id='Bachelor(Man)'
                                onClick={handleChange}
                            >Bachelor(Man)</option>
                            <option data-type={"tenant"}
                                data-name={"tenant"}
                                id='Bachelor(Woman)'
                                onClick={handleChange}>Bachelor(Woman)</option>
                        </div>
                    </div> */}

                </div>
                <div >
                    <label className='labels'>Property Description <span>*</span> </label>
                    <textarea
                        name="propDes"
                        value={values.propDes}
                        onChange={handleChange}
                        className='description' type="text" />
                </div>
            </div>
        </form >
    )
}

export default PropertyDetail