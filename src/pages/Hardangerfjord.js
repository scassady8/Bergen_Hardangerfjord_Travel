import React from "react";
import EidfjordAttractions from "../components/HardangerfjordComponents/Eidfjord";
import HardangerfjordMap from "../components/HardangerfjordComponents/HardangerfjordMap";
import JondalAttractions from "../components/HardangerfjordComponents/Jondal";
import OddaAttractions from "../components/HardangerfjordComponents/Odda";
import VossAttractions from "../components/HardangerfjordComponents/Voss";
import Fjord from "./pageImages/Fjord.jpg";


const Hardangerfjord = () => {
    return (
        <div>
            <h1>Hardangerfjord</h1>
            <p>The world’s third longest fjord, the southernmost glacier in Norway, the most spectacular waterfalls and thousands of fruit trees. Hardanger is one of the most beautiful areas in Norway.</p>
            <img source={Fjord} class="img-fluid" alt="Hardangerfjord"/>
            <HardangerfjordMap/>
            <JondalAttractions />
            <OddaAttractions/>
            <EidfjordAttractions />
            <VossAttractions/>
        </div>
    );
};

export default Hardangerfjord; 