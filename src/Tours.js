import React from 'react'
import Tour from "./Tour"

const Tours = ({tours, removeTours}) => {
    return (
        <ul className="tours">
            <Tour tours={tours} removeTours={removeTours}/>
        </ul>
    )
}

export default Tours
