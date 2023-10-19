import { useEffect, useState } from 'react';
import { Serie } from '../interfaces/serieInterface';
import { Lesson, LessonFull } from '../interfaces/lessonInterface';
import nirvanaBeastAPI from '../api/nirvanaBeastAPI';

interface SerieDetails {
    isLoading: boolean
    serieFull?: Serie
    lessons: LessonFull[]
}


export const useSerieDetails = (serieId: number) => {
    const [state, setState] = useState<SerieDetails>({
        isLoading: true,
        serieFull: undefined,
        lessons: []
    })

    const getSerieDetails = async () => {
        
        const serieDetailsPromise = nirvanaBeastAPI.get(`/series/${serieId}`)
        const lessonsPromise = nirvanaBeastAPI.get(`/series/${serieId}/lessons/`)

        const [serieDetailsResponse, lessonsResponse ] = await Promise.all([serieDetailsPromise, lessonsPromise])        

        setState({
            isLoading: false,
            serieFull: serieDetailsResponse.data,
            lessons: lessonsResponse.data
        })
    }

    useEffect(() => {
      getSerieDetails()
    }, [])

    return{
        ...state
    }
    
}