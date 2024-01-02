import React from "react";
import "./Bio.css";
import GitHub from "./GitHub/GitHub";
import Linkedin from "./Linkedin/Linkedin";
import { Link } from "react-router-dom";
function Bio () {
return(
    <div >
        <div className="description">
            <h1 id="nome">Sinde Jorge Jesus Correia</h1>
            <h1 className="line0">Web developer Full-stack </h1>
            <p class="line1">I have recently completed an intensive </p> 
            <p class="line2">program in coding, I am looking forward to </p>
            <p class="line3">exploring job opportunities within the </p>
            <p class="line4">front-end and full-stack areas.</p> 
        </div>
        <div className="Link">
            <div className="GitHub">
                <Link to="https://github.com/SindeCorreia" target="blank"><GitHub/></Link>
            </div>
            <div className="Linkedin">
                <Link to="https://www.linkedin.com/in/sinde-correia" target="blank"><Linkedin/></Link>
            </div>
        </div>
    </div>
    )
 }
 export default Bio;
 
 