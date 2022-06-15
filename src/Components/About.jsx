import React from "react";
import Navbar from "./Navbar";

function About(props){
    return(
        <div id="about">
            <div className="about-image">
                <img src={props.image} alt=''/>
            </div>
            <div className="about-text">
                <h2> {} </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi id inventore quia ab minus magnam quod exercitationem, repudiandae facere nihil voluptatibus molestiae et illum neque maxime quaerat omnis odit in! Sint totam harum modi voluptatum. Adipisci ea, reiciendis ratione, temporibus sint non beatae modi esse possimus impedit repellendus numquam minus.</p>
                <button> {props.button}</button>
            </div>
        </div>
    )
}
export default About;