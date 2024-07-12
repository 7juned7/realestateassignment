import React, { useState } from 'react';
import PageContext from "./PageContext"

export const PageContextProvider = ({ children }) => {

    const initialValues = {
        iam: "",
        name: "",
        country: "",
        phone: "",
        email: "",
        otp: "",
        propertyFor: "",
        residentalType: "",
        propertyType: "",
        builtUpArea: "",
        totalFloor: "",
        propOnFloor: "",
        propFacing: "",
        propDes: "",
        buildingName: "",
        locality: "",
        city: "",
        landmark: "",
        nonVeg: "",
        petsAllowed: "",
        electricity: "",
        furnishing: "",
        carpetArea: "",
        timePeriod: "",
        maintenence: "",
        amount: "",
        mssgToAgent: "",
        security: ""
    }
    const [additionalFeatures, setAdditionalFeatures] = useState([])
    const [socialAmenities, setSocialAmenities] = useState([])
    const [values, setValues] = useState(initialValues);
    const [bhkType, setBhkType] = useState("");
    const [balcony, setBalcony] = useState("");
    const [residentalType, setResidentalType] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
        if (e.target.type === "radio") {
            setValues({ ...values, [name]: e.target.id })

        }
        if (e.target.dataset.type === "bhk") {

            const item = e.target;



            setBhkType(e.target.id)


            const options = document.querySelectorAll('.propAge option');
            options.forEach(option => {
                if (option.classList.contains("option_style")) {
                    option.classList.remove("option_style")
                }
            });
            item.classList.add("option_style")


        }
        if (e.target.dataset.type === "balcony") {
            const item = e.target
            setBalcony(e.target.id)
            const options = document.querySelectorAll('.balcony option');
            options.forEach(option => {
                if (option.classList.contains("option_style")) {
                    option.classList.remove("option_style")
                }
            });
            item.classList.add("option_style")



        }
        if (e.target.dataset.option === "option") {


            if (!residentalType.includes(e.target.id)) {
                const item = e.target

                item.classList.add("option_style")
                setResidentalType(residentalType => [...residentalType, e.target.id])
            }
            if (residentalType.includes(e.target.id)) {
                const item = e.target
                item.classList.remove("option_style")
                let filteredArray = residentalType.filter(item => item !== e.target.id)
                console.log(filteredArray)
                setResidentalType(filteredArray)

            }

        }
        if (e.target.type === "checkbox") {
            setValues({ ...values, [name]: e.target.id })


        }

        if (e.target.dataset.type === "additionalFeatures") {


            if (!additionalFeatures.includes(e.target.id)) {
                const item = e.target
                item.style.backgroundColor = "blue";
                item.style.color = "white"
                setAdditionalFeatures(additionalFeatures => [...additionalFeatures, e.target.id])
            }
            if (additionalFeatures.includes(e.target.id)) {
                const item = e.target
                item.classList.add("option_style")
                let filteredArray = additionalFeatures.filter(item => item !== e.target.id)
                console.log(filteredArray)
                setAdditionalFeatures(filteredArray)

            }

        }
        if (e.target.dataset.type === "socialAmenities") {


            if (!socialAmenities.includes(e.target.id)) {
                const divElement = e.target.closest('.socialAmenities');

                const item = divElement.outerHTML




                setSocialAmenities(socialAmenities => [...socialAmenities, item])

                console.log(socialAmenities)
            }
            if (socialAmenities.includes(e.target.id)) {
                const item = e.target
                item.style.backgroundColor = "white";
                item.style.color = "black"
                let filteredArray = socialAmenities.filter(item => item !== e.target.id)
                console.log(filteredArray)
                setSocialAmenities(filteredArray)

            }

        }

    }
    console.log(values.timePeriod)

    const [formPage, setFormPage] = useState(0)
    const handleNext = () => {
        if (formPage === 0) {

            if (!values.iam == "" && !values.name == "" && !values.phone == "") {
                console.log("hello")
                setFormPage((formPage + 1))
            }
        }
        if (formPage === 1) {

            if (!values.otp == "") {
                setFormPage((formPage + 1))
            }
        }
        if (formPage === 2) {

            if (!values.propertyFor == "" && !values.propertyType == "" && !values.builtUpArea == "" && !values.carpetArea == "" && !values.totalFloor == "" && !values.propOnFloor == "" && !values.propFacing == "" && !bhkType == "" && !balcony == "" && !values.propDes == "") {
                setFormPage((formPage + 1))
            }
        }
        if (formPage === 3) {

            if (!values.buildingName == "" && !values.locality == "" && !values.locality == "" && !values.landmark == "" && !values.city == "") {
                setFormPage((formPage + 1))
            }
        }
        if (formPage === 4) {
            if (!values.nonVeg == "" && !values.electricity == "" && !values.furnishing == "") {
                setFormPage((formPage + 1))
            }
        }
        if (formPage === 5) {
            if (!values.maintenence == "" && !values.amount == "" && !values.timePeriod == "" && !values.rent == "" && !values.security == "") {
                setFormPage((formPage + 1))
            }
        }
        if (formPage === 6) {
            setFormPage((formPage + 1))
        }






    }


    return (
        <PageContext.Provider
            value={{ handleNext, formPage, setFormPage, handleChange, values, socialAmenities, additionalFeatures, bhkType, residentalType }}
        >
            {children}
        </PageContext.Provider>
    )
}

export default PageContextProvider