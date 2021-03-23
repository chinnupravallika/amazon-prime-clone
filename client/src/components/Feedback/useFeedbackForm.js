// custom hook for react 

import {useState } from 'react'


const useForm = ()=>{
    const [values,setValues] = useState({
        personcontact : '',
        message : ''
    });

    const [errors ,  setErrors] = useState({});

    // on change to update values
    const inputChangeHandler = (event)=>{
        // console.log('changed',event.target.name)
        const {name , value } = event.target
        setValues({
            ...values,
            [name] : value
        });

    }

    const functionToSetErrors = (errorArgument)=>{
        setErrors(errorArgument)
    }


    return { inputChangeHandler , values  , errors,functionToSetErrors,setValues}
}


export default  useForm;