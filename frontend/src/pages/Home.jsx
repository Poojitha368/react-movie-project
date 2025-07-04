import MovieCard from '../componenets/MovieCard'
import { useState } from 'react';
function Home(){
    const [searchQuery,setsearchQuery]  = useState('')
    const movies = [
        {id:1,title:'johgnwick',release_date:'2024'},
        {id:2,title:'Terminator',release_date:'2024'},
        {id:3,title:'matrix',release_date:'2024'}
    ]
    const handleSearch = (e)=>{
        e.preventDefault()
        alert(searchQuery)  
    }
    return(  
        <div className="home">
            <form onSubmit={handleSearch} className='search-form'>
                <input type='text' value={searchQuery} onChange={(e)=>{setsearchQuery(e.target.value)}} placeholder='serach for movies...' className='search-input'></input>
                <button type='submit' className='search-button'>Search</button>
            </form>
            <div className="movies-grid">
                { movies.map((movie)=>(
                    movie.title.toLowerCase().startsWith(searchQuery) &&
                    (<MovieCard movie={movie} key={movie.id}/>)
                ))}
            </div>
        </div>
    );
}

export default Home;