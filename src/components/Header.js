import React, { useState } from 'react'
import logo from "../Images/LOGO.svg"
import language from "../Images/Language.svg"
import user from "../Images/User.svg"
import "./styles/Header.css"
import hamburger from "../Images/icon-hamburger.svg"
import close from "../Images/icon-close.svg"
const Header = () => {
    const [flag, setFlag] = useState(false)
    const handlemenu = () => {
        setFlag(prevflag => !prevflag)
    }
    return (<div style={{ background: "hsla(34, 47%, 93%, 1)" }}>

        <div className='container'>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="menu">
                    <div onClick={handlemenu} className="burger" data-display="inactive"><img className='show' data-open={flag ? ("none") : ("active")} src={hamburger} /><img className='show' data-open={flag ? ("active") : ("none")} src={close} /></div>
                    <div className="menu_items">

                        <ul className={flag ? ("showNav") : ("items")}>
                            <li className="item">PROPERTIES</li>
                            <li className="item">MY DASHBOARD/ACTIVITY</li>
                            <li className="item">LIST YOUR PROPERTY</li>
                            <li className="item">CONTACT US</li>
                            <li className="item">MORE</li>
                            <li className="item language"><img src={language} alt="" /></li>
                            <li className="item"><img src={user} alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Header