import React from "react";
import "./Header.css"
import LogoType from "../imgs/logotype.svg";
import SearchIcon from "../imgs/search.svg";
import Avatar from "../imgs/null-avatar.svg";
import Heart from "../imgs/heart.svg";
import SearchIcon2 from "../imgs/search-with-heart.svg";
import Comparison from "../imgs/comparison.svg";
import Message from "../imgs/message.svg";
import Bought from "../imgs/bought.svg";



const Header : React.FC = () => {
    return(
        <div className="header">
            <div className="container header__container">
                <div className="menu-burger__header">
                    <span></span>
                </div>
                <div className="logo">
                    <img src={LogoType}/>
                </div>
                <div className="search-box">
                    <input className="text-search__input" placeholder="Поиск по объявлениям"></input>
                    <span className="text-field__aicon">
                        <img src={SearchIcon}/>
                    </span>
                </div>
            </div>
            <div className="container header__container-2">
                <ul className="container__list">
                    <li>
                        <img src={Heart} alt="Like"/>
                        <p >Избранное</p>
                    </li>
                    <li>
                        <img src={SearchIcon2} alt="Search"/>
                        <p>Поиски</p>
                    </li>
                    <li>
                        <img src={Comparison} alt="Comparison"/>
                        <p>Сравнения</p>
                    </li>
                    <li>
                        <img src={Message} alt="Message"/>
                        <p>Сообщения</p>
                    </li>
                    <li>
                        <img src={Bought} alt="Bought"/>
                        <p>Я продаю</p>
                    </li>

                </ul>

                <div className="avatar__container">
                    <img src={Avatar} alt="Avatar" className="avatar"/>
                </div>
                <a className="add__announcement"><p>Разместить объявление</p></a>
            </div>
        </div>
    )
}

export default Header;