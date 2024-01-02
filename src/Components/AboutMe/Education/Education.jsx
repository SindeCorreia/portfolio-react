
import React from 'react';
import Cv from '../Contact/Cv.png';
import Dowload from "./Dowload.png"
import WIldcode from "./wildcode.png"
import "./Education.css";

function Education({ onButtonClick, imagemVisivelcv, naoimagemVisivelcv}) {

    return (
        <div className='Educationfather'>     

            <h1 
                className={`EducationInformation ${imagemVisivelcv ?"none":""}`} 
                onMouseEnter={onButtonClick}
                onMouseLeave={naoimagemVisivelcv}
            >
                Web Development, Wild Code School, Lisbon
            </h1>
            {imagemVisivelcv && <img src={Cv} className='CvImage' alt="Imagem" />}

            <p className={` ${imagemVisivelcv ?"none":""}`}>FEBRUARY 2023 — MAY 2023</p> 
            <p className={` ${imagemVisivelcv ?"none":""}`}>This is a three-month Full-stack Web development intensive training focused on JavaScript, HTML, and more technologies.</p>
            <h1 className="EducationInformation">Environmental Engineering (Unfinished), Instituto Superior de Agronomia, Lisbon</h1>
            <p>SEPTEMBER 2018 — JUNE 2021</p> 
            <div className='downloadpdf'>
              <a href="http://localhost:3000/Sinde_Correia_Web_Developer.pdf" download="Sinde_Correia_Web_Developer.pdf" className='linkimgdownloadcv'> <img src={Dowload} alt="CURRICULUM" id="imgdownloadcv"/>DOWNLOAD RESUME </a>
              <a href="http://localhost:3000/CertificadoSinde.pdf" download="CertificadoSinde.pdf" className='linkWIldcode'> <img src={WIldcode} alt="Certificado" id="imgdownloadwild" />DOWNLOAD CERTIFICADE  </a>

            </div>
        </div>
    )
}
export default Education;