import { useState } from 'react';

const useFormHandler = (initialState, callback) => {
    const [formState, setFormState] = useState({ ...initialState });

    const handleFormSubmit = event => {
        if (event) {
            event.preventDefault();
        }
        const success = callback(formState);
        if (success) {
            setFormState({ ...initialState });
        }
    }

    const handleInputChange = event => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    return [formState, handleInputChange, handleFormSubmit];
}

export default useFormHandler;