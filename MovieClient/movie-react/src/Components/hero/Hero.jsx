import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { FaPlayCircle } from "react-icons/fa";
import {Paper} from '@mui/material'
import './Hero.css'
import {Link, useNavigate} from 'react-router-dom'
import { Button } from 'react-bootstrap';


const Hero = ({movies}) => {

    const navigate = useNavigate()

    const reviewsClickHandler = (imdbId) =>{
        navigate(`/Reviews/${imdbId}`)
    }

  return (
    <div className='movie-carousel-container'>
        <Carousel>
            {
                movies?.map((movie) =>{
                    return(
                        <Paper key={movie.id}>
                            <div className='movie-card-container'>
                                <div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>
                                    <div className="movie-detail">
                                        <div className="movie-poster">
                                            <img src={movie.poster} alt="" />
                                        </div>
                                        <div className="movie-title">
                                            <h4>{movie.title}</h4>
                                        </div>
                                        <div className="movie-button-contaiiner">
                                            <div className="play-button-icon-container">
                                            <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length-11)}`}>
                                                <FaPlayCircle className='play-button-icon'/>
                                            </Link>
                                            </div>
                                            
                                        </div>
                                        <div className="movie-review-button-container">
                                            <Button variant='info' onClick={()=>reviewsClickHandler(movie.imdbId)}>Reviews</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                    
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero