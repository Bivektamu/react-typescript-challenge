import React, { ChangeEvent, Dispatch, FormEvent, FormEventHandler, useState } from 'react'


type FormData = {
    fullName: string,
    emailAddress: string,
    phoneNumber: string,
    link: string
}
type Props = {
    submitHandler: (FormData: FormData) => void
}

const isValidEmail = (email:string):boolean => {
    const regx:RegExp =  /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    return regx.test(email)
}
const isValidPhoneNumber = (num:string):boolean => {
    const regx:RegExp =  /^(\+?61|0)[2|3|4|7|8]\d{8}$/
    return regx.test(num)
}

const isValidLink = (link:string) => {
    const regx = /^(https?):\/\/[^\s\/$.?#].[^\s]*$/
    return regx.test(link)
}


const PersonalForm = ({ submitHandler }: Props) => {

    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
    link: ''

    })
    const [errors, setErrors] = useState({
        fullNameError: '',
        emailAddressError: '',
        phoneNumberError: '',
        linkError: '',
    })

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        let newErrors = {}
        for (let key in formData) {

            if (!formData[key as keyof FormData]) {
                newErrors = ({ ...newErrors, [`${key}Error`]: `${key} is required` })
            }
        }
        if(formData.emailAddress && !isValidEmail(formData.emailAddress)) {
            newErrors = ({ ...newErrors, emailAddressError: 'Please type valid email address' })
        }
        if(formData.phoneNumber && !isValidPhoneNumber(formData.phoneNumber)) {
            newErrors = ({ ...newErrors, phoneNumberError: 'Please type valid phone number' })
        }
        
        if(formData.link && !isValidLink(formData.link)) {
            newErrors = ({ ...newErrors, linkError: 'Please type valid phone number' })
        }
        if(Object.keys(newErrors).length > 0) {
            return setErrors({...errors, ...newErrors})
        }

        submitHandler({ ...formData })
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setErrors({ ...errors, [`${e.target.name}Error`]: '' })
    }
    const { fullName, emailAddress, phoneNumber, link } = formData
    return (
        <form onSubmit={onSubmit}>
            <legend>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" placeholder='Jane Doe' id="fullName" name='fullName' className="fullName" onChange={changeHandler} value={fullName} />
                {errors.fullNameError && errors.fullNameError}
            </legend>
            <legend>
                <label htmlFor="emailAddress">Email Address</label>
                <input type="text" placeholder='name@email.com' id="emailAddress" name='emailAddress' className="emailAddress" onChange={changeHandler} value={emailAddress} />
                {errors.emailAddressError && errors.emailAddressError}
            </legend>
            <legend>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" placeholder='045 242 566' id="phoneNumber" name='phoneNumber' className="phoneNumber" onChange={changeHandler} value={phoneNumber} />
                {errors.phoneNumberError && errors.phoneNumberError}
            </legend>
            <legend>
                <label htmlFor="link">Phone Number</label>
                <input type="text" placeholder='https://abc.com' id="link" name='link' className="link" onChange={changeHandler} value={link} />
                {errors.linkError && errors.linkError}
            </legend>
            <button type="submit">Next Step</button>
        </form>
    )
}

export default PersonalForm