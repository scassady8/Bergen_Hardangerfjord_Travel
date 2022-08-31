import React from "react";
import Voringfossen from "./HardangerfjordImages/Voringfossen.jpeg";
import Kjeasen from "./HardangerfjordImages/Kjeasen.jpg";
import KjeasenTrail from "./HardangerfjordImages/KjeasenTrail.jpg";
import Haereid from "./HardangerfjordImages/Haereid.jpg";

const EidfjordAttractions = () => {
  return (
    <div className="container EidfjordAttractions m-3"> 
      <h2>Near Eidfjord</h2>
    <div className="row">
        {/* Voringsfossen */}
        <div className="col-12 border p-2">
          <h5>Vøringfossen</h5>  
          <img src={Voringfossen} class="img-fluid" width="50%" alt="Vøringfossen" />
          <p>The Vøringsfossen Waterfall has a free fall of 145 metres and a total fall of 182 metres, and is one of the most visited tourist attractions in Norway.
            You can easily view the waterfall from above from the viewing platforms and bridge over the falls. 
            <br></br>
            <br></br>
            You can also hike to Vøringsfossen Waterfall along the bottom of the Måbødalen Valley. The hike is about 1 kilometer and takes about 30-45 minutes. 
            The hike to Vøringsfossen Waterfall starts from the parking lot by the road at Storegjel on the eastern side of the Måbøtunnelen Tunnel.
            Follow the old and abandoned road for around 300 meters to the start of the trail. The trail takes you to a great view of the valley and the falls. 
            </p> 
        </div>
        {/*Dolce Vidda */}
        <div className="col-12 border p-2">
          <h5>DolceVidda</h5>   
          <img src="..." class="img-fluid" alt="XXX" />
          <p>Italian gelato and sorbet</p> 
          <a href="https://www.facebook.com/gelato.hardanger/?fref=ts" class="btn btn-primary" target="_blank" rel="noreferrer">DolceVidda</a> 
        </div> 
        {/* Haereid */}
        <div className="col-12 border p-2">
          <h5>Haereidsmoen Iron Age Burial Field</h5>  
          <img src={Haereid} class="img-fluid" alt="Haereidsmoen Iron Age Burial Field" />
          <p>Largest collection of ancient burial sites in western Norway, with 350 graves dating from 400 - 1.000 AD. </p> 
        </div> 
        {/*Kjeåsen Mountain Farm and Simafjorden*/}
        <div className="col-12 border p-2">
          <h5>Kjeåsen Mountain Farm and Simafjorden</h5>  
          <img src={KjeasenTrail} class="img-fluid m-2" alt="Trail to Kjeåsen Farm" />
          <img src={Kjeasen} class="img-fluid m-2 " alt="Kjeåsen Farm" />
          <p>Kjeåsen is said to be Norway’s most inaccessible farm. 
            The farm sits on a mountain ledge 600 metres above the Simadalsfjord.
            It is possible to go by car to the farm. The road is narrow and there are regulations on when you can drive. 
            Driving times up to the farm is restricted to every hour on the hour, and descending from the farm on the half hour.
            <br></br>
            <br></br>
            You can also walk to the mountain farm on a hike that starts in Simadal (parking by Sima Power Plant). 
            From this point take a left towards the fjord to Kjeaneset. 
            The trail forks off to the right and winds steeply up the mountainside. You will climb over 500 meters during the hike.
            Ropes, logs and ladders are necessary aids along the way, and please use them to marvel at the stunning views along the trail.
            The trail is about 1.6 kilometer and takes about 2 hours.  </p> 
        </div>
      </div> 
    </div>
    );
};

export default EidfjordAttractions; 