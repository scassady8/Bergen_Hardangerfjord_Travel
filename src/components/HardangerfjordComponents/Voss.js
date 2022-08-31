import React from "react";
import Skjervsfossen from "./HardangerfjordImages/Skjervsfossen.jpg";
import Tvindefossen from "./HardangerfjordImages/Tvindefossen.jpg";
import VossGondol from "./HardangerfjordImages/VossGondol.jpg";
import Bordalsgjelet from "./HardangerfjordImages/Bordalsgjelet.jpg";
import SyseGard from "./HardangerfjordImages/SyseGard.jpg";

const VossAttractions = () => {
  return (
    <div className="container VossAttractions m-3"> 
      <h2>Near Voss</h2>
      <div className="row">
        {/*Voss Gondola*/}
        <div className="col-sm-6 border p-2">
          <h5>Voss Gondola</h5>
          <img src={VossGondol} class="img-fluid" alt="Voss Gondola" />
          <p>Gondola to the top of Hangurstoppen. At the top, there is a restaurant, bar, and a great panorama view of the mountains surrounding Voss! Roundtrip tickets are about $40 per person. </p> 
          <a href="https://www.vossresort.no/en/gondola" class="btn btn-primary" target="_blank" rel="noreferrer">Voss Gondola</a>
        </div>
        {/* Kayak or SUP in Voss */}
        <div className="col-sm-6 border p-2">
          <h5>Kayaking or SUP rental in Voss</h5>
          <img src="..." class="img-fluid" alt="XXX" />
          <p>XXX</p> 
          <a href="https://www.vossflow.no/bookings-checkouHangurstoppen t/river-standup-paddle-boarding/book" class="btn btn-primary mx-2" target="_blank" rel="noreferrer">Voss Flow</a>
          <a href="https://www.outdoornorway.com/sup-rentals/" class="btn btn-primary" target="_blank" rel="noreferrer">Outdoor Norway</a>
        </div>
        {/* Tvindefossen  */}
        <div className="col-sm-6">
          <h5>Tvindefossen</h5>  
          <img src={Tvindefossen} class="img-fluid" width="50%" alt="Tvindefossen" />
          <p>The waterfall has a drop of 110 metres, and is a very popular tourist attraction. Myths say that the water is a fountain of youth!</p> 
        </div> 
        {/* Skjervsfossen */}
        <div className="col-sm-6 border p-2">
          <h5>Skjervsfossen</h5>  
          <img src={Skjervsfossen} class="img-fluid" width="50%" alt="Skjervefossen" />
          <p>Skjervsfossen is along the road to Voss on the Norwegian Scenic Route of Hardanger.
            It has twin falls plunging out from a height of 150 metres. 
            The area around the waterfalls has paths, stairs, and viewpoints. You can walk all the way to the foot of the waterfall. 
            </p> 
        </div>
        {/*Bordalsgjelet Gorge */}
        <div className="col-sm-6 border p-2">
          <h5>Bordalsgjelet Gorge</h5>
          <img src={Bordalsgjelet} class="img-fluid" alt="Bordalsgjelet Gorge" />
          <p>Bordalsgjelet is a spectacular natural attraction within walking distance from Voss town centre.
            Here you can experience an impressive view of the potholes that have been formed by the ice and river over a period of many thousands of years. 
            When the ground isn’t hidden by snow it is possible to follow a purposely-built path that guides you to the gorge. </p> 
        </div>
        {/*Syse Gard */}
        <div className="col-sm-6 border p-2">
          <h5>Syse Gard</h5>
          <img src={SyseGard} class="img-fluid" alt="Syse Gard" />
          <p>Syse Gard is a farm specializing in fruit farming and processing. 
            They also keep 70 winter-fed sheep. 
            They offer guided tours, dining options and a farm store containing fruit preserves, lamb meat, apple juice, cider, and fresh fruit in season. </p> 
            <a href="https://sysegard.no/english-summary/" class="btn btn-primary" target="_blank" rel="noreferrer">Syse Gard</a>
        </div>
      </div> 
    </div>
    );
};

export default VossAttractions; 