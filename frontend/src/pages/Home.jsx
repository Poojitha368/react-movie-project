import MovieCard from '../componenets/MovieCard'
import { useState,useEffect } from 'react';
import { searchMovies,getPopularMovies } from '../services/api';
function Home(){
    const [searchQuery,setsearchQuery]  = useState('')
    const [movies,setMovies] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)


    useEffect(()=>{
        const loadPopularMovies = async()=>{
            try{
                const populaMovies = await getPopularMovies()
                setMovies(populaMovies)
            } catch(err){
                console.log(err)
                setError("Failed to load movies")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies()
    },[])

    
    const handleSearch = async (e)=>{
        e.preventDefault()
        if(!searchQuery.trim()) return 
        if(loading) return
        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch(err){
            console.log(err)
            setError("failed to serach movies")
        }finally{
            setLoading(false)
        }

    }
    return(  
        <div className="home">
            <form onSubmit={handleSearch} className='search-form'>
                <input type='text' value={searchQuery} onChange={(e)=>{setsearchQuery(e.target.value)}} placeholder='serach for movies...' className='search-input'></input>
                <button type='submit' className='search-button'>Search</button>
            </form>
            { error && <div className='error-messgae'>{error}</div> }
            {loading ? <div className='loading'>Loading</div>: 
            <div className="movies-grid">
                { movies.map((movie)=>(
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
            }
        </div>
    );
}

export default Home;