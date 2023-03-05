import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import './footer.css'







function Footer() {

return (
<div> 

<footer className= 'footer'>
<div className="nav-item"><a href="https://github.com/ymoraille88"><FaGithub size={50} /></a></div>
<div className="nav-item"><a href="https://linkedin.com/in/yves-henry-e-moraille-164001166/"><FaLinkedin size={50} /></a></div>
<div className="nav-item"><a href="pinmpin40@hotmail.com"><AiOutlineMail size={50} /></a></div>

</footer>

</div>

);

}


export default Footer;