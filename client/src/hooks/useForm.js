import {useEffect, useState} from 'react';

export function useForm(initialValues, submitCallback, reinitializeFomr = false) {
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        if (reinitializeFomr) {
        // reinitialize form values
            setValues(initialValues);   
        }
    }, [initialValues, reinitializeFomr]);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        await submitCallback(values);

        setValues(initialValues);   // clear form
    }
    
    return {
        values,
        changeHandler,
        submitHandler,
    }

}