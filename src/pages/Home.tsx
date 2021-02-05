import { Grid } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieList from '../components/MovieList'
import SearchInput from '../components/SearchInput'
import useData, { Movie } from '../hooks/useData'
import HomeStyles from './Home.styles'




const Home = () => {
  const [keyword, setKeyword] = useState("Batman")
  const [watched, setWatched] = useState<Movie[]>([])
  const {error, loading, data} = useData(keyword)

  const addWatched = (movie: Movie) => {
    const isWatched = watched.some((m) => m.Title === movie.Title)
    if(isWatched){
      return;
    }else{
      const newWatchedList = [...watched, movie]
      setWatched(newWatchedList)
    }

  }
  const removeWatched = (movie: Movie)=>{
    const newWatchedFilms = watched.filter((watched) => watched.Title !== movie.Title)
    setWatched(newWatchedFilms)
  }
 
 const classes = HomeStyles ()
  return (
    <div className={classes.root} >
      <Grid container>
        <Grid item xs={12}>
          <p>Hello welcome to my movies</p>
          {/* maybe i dont need setsearch input here */}
          <SearchInput  setSearchInput={setKeyword} />
        </Grid>
        <Grid item xs={12}>
          {/* Movies will go here */}
          {error &&  !loading && <p>Hey sorry there was an error</p>}
          {loading && <p>Hey Give me a second i am loading</p>}

          {data &&  <MovieList movies={data} addWatched={addWatched} /> }


        
        </Grid>

        <Grid>
          <p>Movies Watched</p>
        </Grid>
        <Grid>
          {/* movies wathhed */}
        <MovieList movies={watched} removeWatched={removeWatched} />
        </Grid>



      </Grid>
    </div>
  )
}

export default Home
