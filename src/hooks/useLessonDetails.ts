import { useEffect, useState } from "react"
import nirvanaBeastAPI from "../api/nirvanaBeastAPI"
import { Instructor } from "../interfaces/instructorsInterface"
import { LessonFull } from "../interfaces/lessonInterface"

interface LessonDetails {
    isLoading: boolean
    lessonFull?: LessonFull
    instructor: Instructor[]
}

export const useLessonDetails = (lessonId: number) => {
    const [state, setState] = useState({
        isLoading: true,
        lessonFull: undefined,
        instructors: []
    })
    
    const getLessonDetails = async () => {
        const lessonDetailsPromise = nirvanaBeastAPI.get<LessonFull>(`lessons/${lessonId}`)
        const instructorPromise = nirvanaBeastAPI.get<Instructor>(`${lessonId}/instructor`)
        
        const [ lessonDetailsResponse, instructorDetailsResponse ]= await Promise.all([ lessonDetailsPromise, instructorPromise ])

        setState({
            isLoading: false,
            lessonFull: lessonDetailsResponse.data, 
            instructors: instructorDetailsResponse.data
        })             
    }
    useEffect(() => {
        getLessonDetails()      
      } , [])
    return {
        ...state
    }
}