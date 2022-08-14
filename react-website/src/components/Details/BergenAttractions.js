import React from "react";
import Bryggen from "./images/Bryggen.jpg";
import Floibanen from "./images/Floibanen.jpg";
import BergenMap from "./images/BergenMap.png";

const BergenAttractions = () => {
  return (
    <div className="BergenAttractions"> 
      <h2>Attractions</h2>
      <img src={BergenMap} class="img-fluid" width="50%" alt="Bergen Map"/>
      <ol>
        <li> Bryggen</li>
        <li> Fløibanen</li>
        <li> Fløyen Trailhead</li>
        <li> Bergenhus Fortress</li>
        <li> Ulriken Trailhead</li>
        <li> Ulriken</li>
        <li> City Sauna Bergen</li>
        <li> Heit Bergen Sauna</li>
        <li> Fantoft Stave Church</li>
      </ol>
      <div className="row">
        {/* Bryggen */}
        <div className="col-sm-4 border">
          <h5>Bryggen</h5>   
          <img src={Bryggen} class="img-fluid" width="25%" alt="Bryggen"/>
          <p>Old wharf buildings that are now shops, cafes, and galleries. UNESCO World Heritage Site</p>  
        </div>                    
      {/* Fløibanen */}
      <div className="col-sm-4">
        <h5>Fløibanen</h5>
        <img src={Floibanen} class="img-fluid" width="25%" alt="Fløibanen"/>
        <p>Funicular from Bergen city center to Fløyen. </p>  
      </div>
      {/* Fløyen */}
      <div className="col-sm-4">
        <h5>Mount Fløyen</h5>   
        <p>Lots of options for hiking and exploring the mountain. Multiple cafes at the top of the funicular to enjoy the view. </p>  
      </div>
      {/* Fløyen Trailhead */}
      <div className="col-sm-4">
        <h5>Fløyen Trailhead</h5>   
        <p>Trailhead to hike up to Fløyen</p>  
      </div> 
      {/* Bergenhus */}
      <div className="col-sm-4">
        <h5 className="card-title">Bergenhus Fortress</h5>   
        <p className="card-text">XXX</p>  
      </div>
      {/* Ulriken Trailhead */}
      <div className="col-sm-4">
        <h5>Ulriken Trailhead</h5>   
        <p>2 km hiking trail to the top of Ulriken</p>  
      </div>
      {/* Ulriken */}
      <div className="col-sm-4">
        <h5>Ulriken</h5>   
        <p>Mountain overlooking Bergen with cable car and restaurant</p>  
      </div>
      {/* Sauna */}
      {/* Fantoft Stave Church */}
      {/* Horseback riding */}
      {/* City walking tour - I love Bergen */}
      </div>
    </div>
    );
};

export default BergenAttractions; 