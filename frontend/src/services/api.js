const API_KEY = '54097f09'
const BASE_URL = 'https://api.themoviedb.org/3'


export const getPopularMovies = async()=>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}

export const searchMovies = async()=>{
    const response = await fetch(`${BASE_URL}/movie/search?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results
}