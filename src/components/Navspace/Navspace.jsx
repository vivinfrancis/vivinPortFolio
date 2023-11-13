import React from 'react'
import './navspace.scss'
import { FaGithub, FaLinkedin, FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";

const Navspace = () => {
    const showLink = (e) => {
        var targ = e.target
        if(targ.childNodes[0].childNodes[1].classList[1] !== "link-active"){
                e.preventDefault()
                    if(document.querySelector(".link-active") !== null){
                        document.querySelector(".link-active").classList.toggle("link-active")
                        document.querySelector(".link-btn-bg-active").classList.toggle("link-btn-bg-active")
                    }     
                targ.childNodes[0].classList.toggle("link-btn-bg-active")
                targ.childNodes[0].childNodes[1].classList.toggle("link-active")             
            }
        }
    
    return (
        <div className="navspace">
            <ul className="links">
                <a href="https://github.com/vivinfrancis" target="_blank" rel="noreferrer" className="git link-btn" onClick={showLink}>
                    <div className="nav-links-bg">                     
                        <FaGithub className="link-icon" size="32px"/>
                        <div className="link-text">Github</div>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/alankara-vivin-francis-b4575b1b9" target="_blank" rel="noreferrer" className="linkedin link-btn" onClick={showLink}>
                <div className="nav-links-bg">
                        <FaLinkedin className="link-icon" size="32px"/>
                        <div className="link-text">Linkedin</div>
                    </div>
                </a>
                <a href="https://t.me/inciner8r" target="_blank" rel="noreferrer" className="telegram link-btn" onClick={showLink}>
                    <div className="nav-links-bg">
                        < FaTelegram className="link-icon" size="32px"/>
                        <div className="link-text">Telegram</div>
                    </div>    
                </a>
            </ul>
        </div>
    )
}

export default Navspace
