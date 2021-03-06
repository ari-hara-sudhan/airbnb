import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import "./Banner.css"
import Search from './Search'

function Banner() {
    const [showSearch,setShowsearch]=useState(false)
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search/>}
                <Button onClick={()=>setShowsearch(!showSearch)}  className="banner__searchbutton" variant="outlined">Search Dates</Button>

            </div>
            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>plan a different kind of gateway to uncover the hidden gems near you</h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
