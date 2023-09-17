import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { MovieFull } from "../interfaces/movieInterface"
import { Cast } from "../interfaces/creaditsInterface"

interface MovieDetails {
    isLoading: boolean
    movieFull?: MovieFull
    cast: Cast[]
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true, 
        movieFull: undefined,
        cast: []
    })
    
    const getMovieDetails = async () => {
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`)
        const castPromise = movieDB.get<MovieFull>(`/${movieId}/credits`)

        const [ movieDetailsResponse, castDetailsResponse ]= await Promise.all([ movieDetailsPromise, castPromise ])
        setState({
            isLoading: false,
            movieFull: movieDetailsResponse.data,
            cast: castDetailsResponse.data.cast
        })

        
        
    }
    
    useEffect(() => {
      getMovieDetails()      
    } , [])
    
    return{
        ...state
    }
}