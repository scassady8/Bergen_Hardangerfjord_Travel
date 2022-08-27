import React from "react";
import HardangerfjordMap from "../components/HardangerfjordComponents/HardangerfjordMap";
import OddaAttractions from "../components/HardangerfjordComponents/Odda";
import VossAttractions from "../components/HardangerfjordComponents/Voss";
import Fjord from "./pageImages/Fjord.jpg";


const Hardangerfjord = () => {
    return (
        <div>
            <h1>Hardangerfjord</h1>
            <img source={Fjord} class="img-fluid" alt="Hardangerfjord"/>
            <HardangerfjordMap/>
            <OddaAttractions/>
            <VossAttractions/>
        </div>
    );
};

export default Hardangerfjord; 