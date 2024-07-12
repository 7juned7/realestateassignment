import React, { useContext } from 'react'
import PageContext from '../../Context/PageContext'

const PriceDetails = () => {
    const { values, handleChange } = useContext(PageContext)
    return (
        <div className="pricedetails_form " style={{ padding: "2rem" }}>
            <form>
                <div className='grid'>
                    <div className='flex'>
                        <div className='width' >

                            <label className='labels' >Rent <span>*</span></label>
                            <div>

                                <input type="text"
                                    name='rent'
                                    placeholder='Rent/month'
                                    onChange={handleChange}
                                    value={values.rent} />
                            </div>
                        </div>
                        <div className='width' >

                            <label className='labels' >Security <span>*</span></label>
                            <div>

                                <input type="text"
                                    name='security'
                                    onChange={handleChange}
                                    value={values.security} />
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='width'>
                            <label className='labels' ><span>*</span>Maintenence</label>

                            <div>

                                <select value={values.maintenence} name="maintenence" onChange={handleChange} >
                                    <option >Select</option>
                                    <option >Include in Rent</option>
                                    <option >Extra Maintenance</option>
                                </select>
                            </div>
                        </div>
                        <div className=' width'>

                            <label className='labels'><span>*</span>Maintenence</label>
                            <div className="flex">

                                <div className='width'>
                                    <input type="number"
                                        name='amount'
                                        onChange={handleChange}
                                        value={values.amount} />
                                </div>
                                <div className='width'>
                                    <select name='timePeriod'
                                        value={values.timePeriod}
                                        onChange={handleChange}>
                                        <option>Monthly</option>
                                        <option>Yearly</option>
                                    </select>
                                </div>
                            </div>




                        </div>

                    </div>


                    <div className='grid' >
                        <label className='flex'>Additional Pricing details to convey to agent?</label>
                        <textarea className='description' name='mssgToAgent' value={values.mssgToAgent} onChange={handleChange} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PriceDetails