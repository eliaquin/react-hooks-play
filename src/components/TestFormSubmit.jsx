import React from 'react';
import useFormHandler from '../hooks/useFormHandler';

const TestFormSubmit = () => {
    const [frm, handleInputChange, handleFormSubmit] = useFormHandler(initialState(), submitForm);

    function initialState() {
        return { nombre: "", apellido: "" };
    }

    function submitForm(data) {
        console.log(data);
        return true;
    }

    return (<div>
        <input type="text" name="nombre" onChange={handleInputChange} value={frm.nombre} />
        <input type="text" name="apellido" onChange={handleInputChange} value={frm.apellido} />
        <button onClick={handleFormSubmit}>Enviar</button>
    </div>);
}

export default TestFormSubmit;