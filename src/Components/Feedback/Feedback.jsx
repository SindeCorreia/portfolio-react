import React from "react";
import { useState } from "react";
import "./Feedback.css";
import Face1 from "./FeedbackImg/face1.png";
import Face2 from "./FeedbackImg/face2.png";
import Face3 from "./FeedbackImg/face3.png";
import Face4 from "./FeedbackImg/face4.png";
import Face5 from "./FeedbackImg/face5.png";

function Feedback() {
  const enviarFeedback = () => {
    // Simulação de envio de feedback
    const feedbackText = document.querySelector('.feedback-input').value;
    console.log('Feedback enviado:', feedbackText);
    // Aqui você pode adicionar lógica para enviar feedback para um serviço ou lidar com ele localmente.
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="feedback">
      <div>
        <h1 id="feedbackimprove">I would like your feedback to improve my website</h1>
      </div>
      <div className="FeedBackimprove">
        <div className="FeedBackOpinion">
          <h1>What is your opinion of this page</h1>
          <img src={Face5} alt="Happyface" onClick={() => handleImageClick(Face5)} />
          <img src={Face4} alt="Happyface" onClick={() => handleImageClick(Face4)} />
          <img src={Face3} alt="Happyface" onClick={() => handleImageClick(Face3)} />
          <img src={Face2} alt="Happyface" onClick={() => handleImageClick(Face2)} />
          <img src={Face1} alt="Happyface" onClick={() => handleImageClick(Face1)} />
        </div>
        <div className="FeedBackbox">
          <h1>Please select your feedback category below</h1>
        </div>
        {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <span className="close-btn" onClick={closePopup}>X</span>
            <h2>Obrigado pela sua classificação!</h2>
          </div>
        </div>
      )}
      </div>
      <div className="feedbacktext">
        <h1>Please leave your feedback below .</h1>
        <textarea
          className="feedback-input"
          placeholder="Escreva seu feedback aqui..."
        />
      </div>
      <button onClick={enviarFeedback}>SEND</button>
    </div>
  );
}

export default Feedback;
