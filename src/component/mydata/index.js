import React from 'react'

const Dataku =({image,title,album,artist}) => {
    return (
        <div>
            <img src={image}/>
            <label>{artist}</label>
            <label>{album}</label>
            <label>{title}</label>
        </div>
    ) 
}


export default Dataku;