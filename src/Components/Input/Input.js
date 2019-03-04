import React from 'react';

const Input = (props) => {
    return(
        <form onSubmit={props.search}>
            <input type="text" value={props.searchQuery} onChange={props.handleChange} placeholder="Search Here" />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Input;