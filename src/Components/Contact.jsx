import React from "react";

function Contact() {
    return(
        <div id="contact">
            <h3>Enviame un mail</h3>
            <div className="contact-input">
                <input type='email' placeholder='ejemplo@gamil.com'/>
                <a href="#">Contactanos</a>
            </div>
        </div>
    )
}

export default Contact;