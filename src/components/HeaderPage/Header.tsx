import React from "react";
import "./Header.css"
const Header : React.FC = () => {
    return(
        <div className="header">
            <div className="container header__container">
                <div className="menu-burger__header">
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Header;