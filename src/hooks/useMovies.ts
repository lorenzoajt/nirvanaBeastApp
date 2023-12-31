import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Movie, MovieDBResponse } from "../interfaces/movieInterface"

interface MoviesState {
    nowPlaying: Movie[]
    popular: Movie[]
    topRated: Movie[]
    upcoming: Movie[]    
}

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    })

    const getMovies = async () => {
        const nowPLayingPromise = movieDB.get<MovieDBResponse>('/now_playing')
        const popularPromise = movieDB.get<MovieDBResponse>('/popular')
        const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated')
        const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming')
        
        const res = await Promise.all([ nowPLayingPromise, popularPromise, topRatedPromise, upcomingPromise ])

        setMoviesState({
            nowPlaying: res[0].data.results,
            popular: res[1].data.results,
            topRated: res[2].data.results,
            upcoming: res[3].data.results,
        })
        
        setIsLoading(false)
    }

    useEffect(() => {
        getMovies()        
      }, [])

    return {
        ...moviesState,
        isLoading
    }
}