import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'en-US',
    },
    headers: {
        'Content-Type': 'aplication/json',
    },
})
