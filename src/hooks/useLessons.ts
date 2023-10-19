import { useEffect, useState } from "react"
import { Lesson } from "../interfaces/lessonInterface"
import nirvanaBeastAPI from "../api/nirvanaBeastAPI"
import { Instructor } from "../interfaces/instructorsInterface"
import { Serie } from "../interfaces/serieInterface"
import { Style } from "../interfaces/stylesInterfaces"

interface LessonsState {
    newLessons: Lesson[]
    instructors: Instructor[]
    series: Serie[],
    styles: Style[],
}

export const useLessons = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [lessonsState, setLessonsState] = useState<LessonsState>({
        newLessons : [],
        instructors: [],
        series: [],
        styles: []
    })

    const getLessons = async () => {
        const newLessonsPromise = nirvanaBeastAPI.get('/lessons')
        const instructorsPromise = nirvanaBeastAPI.get('/instructors')
        const seriesPromise = nirvanaBeastAPI.get('/series')
        const stylesPromise = nirvanaBeastAPI.get('/styles')

        const res = await Promise.all([ newLessonsPromise, instructorsPromise, seriesPromise, stylesPromise ])

        setLessonsState({
            newLessons: res[0].data,
            instructors: res[1].data,
            series: res[2].data,
            styles: res[3].data,
        })
        
        setIsLoading(false)
    }

    useEffect(() => {
      getLessons()      
    }, [])
    return {
        ...lessonsState,
        isLoading
    }
}