import {useEffect, useState} from 'react';

export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        // reinitialize form values
        setValues(initialValues);   
    }, [initialValues]);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallback(values);

        setValues(initialValues);   // clear form
    }
    
    return {
        values,
        changeHandler,
        submitHandler,
    }

}