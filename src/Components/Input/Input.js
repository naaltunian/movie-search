import React from 'react';
import "./Input.css";

const Input = (props) => {
    return(
        <form className="input-form" onSubmit={props.search}>
            <input className="input-bar" name="input" type="text" value={props.searchQuery} onChange={props.handleChange} placeholder="Search Here" />
            <input className="input-btn" type="submit" value="Submit" />
        </form>
    )
}

export default Input;