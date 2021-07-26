import React, { useState } from 'react'

const FormInput = (props) => {

    const [inputType] = useState(props.type);
    const [inputValue, setInputValue] = useState('');

    handleChange = e => {
        setInputValue(e.target.value);

        if(props.onChange) props.onChange(inputValue);
    }

    return (
        <>
            <input type={inputType} value={inputValue} onChange={handleChange} name="input-form" className="inputclass"  />
        </>
    );
}