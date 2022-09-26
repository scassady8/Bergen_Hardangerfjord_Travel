import React from "react";
import BergenMapImage from "./BergenImages/BergenMapImage.png";

const BergenMap = () => {
  return (
    <div className="BergenAttractions m-3"> 
      <img src={BergenMapImage} class="img-fluid" width="50%" alt="Bergen Map"/>
      <ol>
        <li> Bryggen</li>
        <li> Fløibanen</li>
        <li> Fløyen</li>
        <li> Bergenhus Fortress</li>
        <li> Ulriken Trailhead</li>
        <li> Ulriken</li>
        <li> City Sauna Bergen</li>
        <li> Heit Bergen Sauna</li>
        <li> Fantoft Stave Church</li>
      </ol>
    </div>
    );
};

export default BergenMap; 