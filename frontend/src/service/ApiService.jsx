import axios from "axios";

const url = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_VERSION}`

export const createSubscription = async(email) => {
    const res = await axios.post(`${url}/subscription/create-subscription`,
        {email}
    )
    return res;
}