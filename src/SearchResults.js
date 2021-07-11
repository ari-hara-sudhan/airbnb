import React from 'react'
import "./SearchResults.css"
import StarIcon from "@material-ui/icons/Star"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
function SearchResults({img,loaction,title,des,star,price,total}) {
    return (
        <div className="searchresult">
            <img src={img} alt={title}/>
            <FavoriteBorderIcon className="searchresult__heart"/>
            <div className="searchresult__info">
                <div className="searcresult__infotop">
                    <p>{loaction}</p>
                    <p>____</p>
                    <p>{des}</p>

                </div>
                <div className="searcresult__infobottom">
                    <div className="searchresult__star">
                        <StarIcon className="searchresult__star"/>
                        <p><strong>{star}</strong></p>

                    </div>
                    <div className="searchresult__price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>

                </div>

            </div>

            
        </div>
    )
}

export default SearchResults
