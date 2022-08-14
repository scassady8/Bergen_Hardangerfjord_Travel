import React from "react";
import HardangerfjordAttractions from "../components/Details/HardangerfjordAttractions";
import HardangerfjordView from "./pageImages/HardangerfjordView.jpg";

const Hardangerfjord = () => {
    return (
        <div>
            <h1>Hardangerfjord</h1>
            <img source={HardangerfjordView} class="img-fluid" alt="Hardangerfjord"/>
            <HardangerfjordAttractions />
        </div>
    );
};

export default Hardangerfjord; 