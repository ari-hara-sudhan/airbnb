import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import { Avatar } from '@material-ui/core'
import LanguageIcon from "@material-ui/icons/Language"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="https://www.bing.com/th?id=OIP.EVZrE-vj_hlRN84r0YBKaQHaCT&w=344&h=105&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="airbnb"/>
            
            <div className="header__center">
                <input/>
                <SearchIcon/>
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>


            </div>
        </div>
    )
}

export default Header
