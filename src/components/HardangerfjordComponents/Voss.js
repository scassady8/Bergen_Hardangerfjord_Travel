import React from "react";
import Skjervefossen from "./HardangerfjordImages/Skjervefossen.jpg";
import Tvindefossen from "./HardangerfjordImages/Tvindefossen.jpg";
import VossGondol from "./HardangerfjordImages/VossGondol.jpg";

const VossAttractions = () => {
  return (
    <div className="container VossAttractions m-3"> 
      <h2>Attractions near Voss</h2>
      <div className="row">
        {/*Voss Gondola*/}
        <div className="col-sm-6 border p-2">
          <h5>Voss Gondola</h5>
          <img src={VossGondol} class="img-fluid" alt="Voss Gondola" />
          <p>XXX</p> 
          <a href="https://www.vossresort.no/en/gondola" class="btn btn-primary" target="_blank" rel="noreferrer">Voss Gondola</a>
        </div>
        {/* Kayak or SUP in Voss */}
        <div className="col-sm-6 border p-2">
          <h5>Kayaking or SUP rental in Voss</h5>
          <img src="..." class="img-fluid" alt="XXX" />
          <p>XXX</p> 
          <a href="https://www.vossflow.no/bookings-checkout/river-standup-paddle-boarding/book" class="btn btn-primary" target="_blank" rel="noreferrer">Voss Flow</a>
          <a href="https://www.outdoornorway.com/sup-rentals/" class="btn btn-primary" target="_blank" rel="noreferrer">Outdoor Norway</a>
        </div>
        {/* Tvindefossen  */}
        <div className="col-sm-6">
          <h5>Tvindefossen</h5>  
          <img src={Tvindefossen} class="img-fluid" width="50%" alt="Tvindefossen" />
          <p>XXX</p> 
        </div> 
        {/* Skjervefossen */}
        <div className="col-sm-6 border p-2">
          <h5>Skjervefossen</h5>  
          <img src={Skjervefossen} class="img-fluid" width="50%" alt="Skjervefossen" />
          <p>XXX</p> 
        </div>
        {/*Bordalsgjelet Gorge */}
        <div className="col-sm-6 border p-2">
          <h5>Kayaking or SUP rental in Voss</h5>
          <img src="..." class="img-fluid" alt="XXX" />
          <p>XXX</p> 
          <a href="https://www.vossflow.no/bookings-checkout/river-standup-paddle-boarding/book" class="btn btn-primary" target="_blank" rel="noreferrer">Voss Flow</a>
          <a href="https://www.outdoornorway.com/sup-rentals/" class="btn btn-primary" target="_blank" rel="noreferrer">Outdoor Norway</a>
        </div>
      </div> 
    </div>
    );
};

export default VossAttractions; 