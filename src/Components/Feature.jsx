import React from "react";
import FeatureBox from "./FeatureBox";
import featureimage from "../images/feature_1.png"
import featureimage1 from '../images/feature_2.png'
import featureimage2 from '../images/feature_3.png'

function Feature() {
    return(
       <div id="features">
           <div className="a-container">
               <FeatureBox image={featureimage} title='Curso de Desarrolo'/>
               <FeatureBox image={featureimage1} title='Servicio de Salario'/>
               <FeatureBox image={featureimage2} title='Utilidades'/>
           </div>
       </div>
    )
}
export default Feature;