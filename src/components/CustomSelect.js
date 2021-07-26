import React, { useState } from 'react'

const CustomSelect = props => {
    const [data] = useState(props.data);
    const [selectedData, setSelectedData] = useState("");

    const handleChange = e => {
        setSelectedData(e.target.value)

        if(props.onSelectChange) props.onSelectChange(e.target.value); 
    }

    const options = data.map(ele => (
        <option key={ele.id} value={ele.id}>{ele.name}</option>
    ));

    return (
        <>
            <select onChange={handleChange} name="customSearch" className="custom-select">
                { options }
            </select>
        </>
    );
}

export default CustomSelect;