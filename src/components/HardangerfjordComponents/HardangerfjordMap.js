import React from "react";
import HardangerfjordMapImage from "./HardangerfjordImages/HardangerfjordMap.png";

const HardangerfjordMap = () => {
  return (
    <div className="container HardangerfjordMap m-3"> 
      <h2>Attractions</h2>
      <img src={HardangerfjordMapImage} class="img-fluid" width="50%" alt="Hardangerfjord Map"/>
      {/* */}
      <ol>
        <li>Steinsdalfossen</li>
        <li>Furebergsfossen</li>
        <li>Bondhusvatn</li>
        <li>Baroniet Rosendal</li>
        <li>Fjellhaugvatn</li>
        <li>Badeplassen på Apold</li>
        <li>Alde Sider</li>
        <li>Siderhuset Ola K</li>
        <li>Aga Sideri</li>
        <li>Trolltunga</li>
        <li>Låtefossen</li>
        <li>Freimslia Viewpoint</li>
        <li>Storanes</li>
        <li>Heit Sørfjorden Sauna</li>
        <li>Tveitafossen</li>
        <li>Søtefossen</li>
        <li>DolceVidda</li>
        <li>Haereidsmoen Iron Age Burial Field</li>
        <li>Vøringfossen</li>
        <li>Kjeåsen Mountain Farm</li>
        <li>Syse Gard</li>
        <li>Skjervsfossen</li>
        <li>Voss Gondola</li>
        <li>Tvindefossen</li>
        <li>Bordalsgjelet Gorge</li>
      </ol>
    </div>
    );
};

export default HardangerfjordMap; 