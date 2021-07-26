import React, { useState } from 'react'

const FormInput = props => {

    const [inputType] = useState(props.type);
    const [ inputValue, setInputValue ] = useState('');

    const handleChange = e => {
        const value = e.target.value;

        setInputValue(value);

        if(props.onChange) props.onChange(value);
    }

    return (
        <>
            <input type={inputType} value={inputValue} onChange={handleChange} name="inputValue" />
        </>
    );
}

export default FormInput;