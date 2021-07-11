import React from 'react'
import "./Card.css"
function Card({src,title,des,price}) {
    return (
        <div className="card">
            <img src={src} alt={title}/>
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{des}</h4>
                <h3>{price}</h3>

            </div>
        </div>
    )
}

export default Card
