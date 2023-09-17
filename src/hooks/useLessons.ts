import { useEffect, useState } from "react"
import { Lesson } from "../interfaces/lessonInterface"
import nirvanaBeastAPI from "../api/nirvanaBeastAPI"

interface LessonsState {
    newLessons: Lesson[]
}

export const useLessons = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [lessonsState, setLessonsState] = useState<LessonsState>({
        newLessons : [],
    })

    const getLessons = async () => {
        const newLessonsPromise = nirvanaBeastAPI.get('/lessons')

        const res = await Promise.all([ newLessonsPromise ])

        setLessonsState({
            newLessons: res[0].data
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