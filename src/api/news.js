import axios from "axios"

export const fetchNews = async () => {
    const result = await axios.get('/portaljson')
    return result.data
}