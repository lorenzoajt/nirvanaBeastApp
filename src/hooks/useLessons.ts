import { useEffect, useState } from "react"
import { Lesson } from "../interfaces/lessonInterface"
import nirvanaBeastAPI from "../api/nirvanaBeastAPI"
import { Instructor } from "../interfaces/instructorsInterface"

interface LessonsState {
    newLessons: Lesson[]
    instructors: Instructor[]
}

export const useLessons = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [lessonsState, setLessonsState] = useState<LessonsState>({
        newLessons : [],
        instructors: []
    })

    const getLessons = async () => {
        const newLessonsPromise = nirvanaBeastAPI.get('/lessons')
        const instructorsPromise = nirvanaBeastAPI.get('/instructors')

        const res = await Promise.all([ newLessonsPromise, instructorsPromise ])

        setLessonsState({
            newLessons: res[0].data,
            instructors: res[1].data
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