import React, { useState } from 'react'

const Tour = ({tours, removeTours}) => {
    const [readMore, setReadMore] = useState(false)

    return (
        <li className="tour">
            {tours.map(tour => {
                const {id, image, info, name, price} = tour;

                return (
                    <div className="tour__inner" key={id}>
                        <img src={image} alt={name} />
                        <div className="tour__info__container">
                            <div className="heading">
                                <h2>{name}</h2>
                                <h3>${price}</h3>
                            </div>
                            <p>
                                {readMore ? info : `${info.substring(0,250)}... `}
                                <button class="read-more-btn" onClick={() => setReadMore(!readMore)}> {readMore ? "Read Less" : "Read More"}</button>
                            </p>
                            <button className="not-intrested-btn" onClick={() => removeTours(id)}>Not Intrested</button>
                        </div>
                    </div>
                )
            })}
        </li>
    )
}

export default Tour
