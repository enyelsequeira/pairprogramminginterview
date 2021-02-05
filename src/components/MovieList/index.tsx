import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography, CardMedia } from '@material-ui/core'
import React, { FC } from 'react'
import { Movie } from '../../hooks/useData'
import CardStyle from './MovieList.styles'

interface Props {
  movies: Movie[],
  addWatched?: (arg: Movie) => void,
  removeWatched?: (arg: Movie) => void
}

const MovieList: FC<Props> = ({ movies, addWatched, removeWatched }) => {
  const classes = CardStyle()
  return (
    <Grid item xs={12}>
      <ul>
        {movies.map((movie) => {
          return (
            <Card className={classes.card} >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={movie.Poster}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {movie.Title}
                  </Typography>

                </CardContent>
              </CardActionArea>
              <CardActions>
                {addWatched && <Button onClick={() => addWatched(movie)} size="small" color="primary">
                  Add to watched list
              </Button>}
                {
                  removeWatched && <Button onClick={() => removeWatched(movie)} size="small" color="primary">
                    Remove from watched
               </Button>
                }

              </CardActions>
            </Card>

          )
        })}
      </ul>

    </Grid>
  )
}

export default MovieList
