import { useState } from "react";

export function useForm(initialValues, submitCallback){
    const [state, setState]=useState(initialValues)

    const changeHandler=(e)=>{
        setValues(state=> ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler=(e)=> {
        e.preventDefault()
        submitCallback(values)
    }

    return {
        values,
        changeHandler,
        submitHandler,
    }

}