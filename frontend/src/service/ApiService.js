import axios from "axios";

const url = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_VERSION}`
// `${url}`

//create new subscription
export const createSubscription = async(email) => {
    const res = await axios.post(`${url}/subscription/create-subscription`,
        {email}
    )
    return res;
}

//fetch profile details
export const getUserDetails = async() => {
    const res = await axios.get(`${url}/user/getProfileDetails`)
    return res;
}

//login function
export const login = async() => {
    const res = await axios.post(`${url}/user/login`)
    return res;
}

//logout function
export const logout = async() => {
    const res = await axios.post(`${url}/user/logout`)
    return res;
}

//get password rest OTP function
export const passwordRestOTP = async() => {
    const res = await axios.post(`${url}/user/passwordRestOTP`)
    return res;
}

//OTP code verification funtion
export const verifyOTP = async() => {
    const res = await axios.post(`${url}/user/verifyOTP`)
    return res;
}

//password reset funstion
export const ResetPassword = async() => {
    const res = await axios.post(`${url}/user/ResetPassword`)
    return res;
}

//get all technical skills function
export const getAllTechnicals = async() => {
    const res = await axios.get(`${url}/technical/get-technical`)
    return res;
}