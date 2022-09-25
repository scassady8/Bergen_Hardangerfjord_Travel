import React from "react";
import Steinsdalfossen from "./HardangerfjordImages/Steinsdalfossen.jpg";
import Bondhusvatnet from "./HardangerfjordImages/Bondhusvatnet.jpg";
import Furebergsfossen from "./HardangerfjordImages/Furebergsfossen.jpg";
import BarionetManor from "./HardangerfjordImages/BarionetHouse.jpg";
import Fjellhaugvatn from "./HardangerfjordImages/Fjellhaugvatn.jpg";

const JondalAttractions = () => {
  return (
    <div className="container JondalAttractions m-3"> 
      <h2>Near Jondal</h2>
      <div className="row">
        {/* Steinsdalfossen */}
        <div className="col-sm-6 border p-2">
          <h5>Steinsdalfossen</h5> 
          <img src={Steinsdalfossen} class="img-fluid" width="50%" alt="Steinsdalfossen" />
          <p className="card-text">Go behind the waterfall at Steinsdalfossen! 
            The path allows you to walk under the waterfall to a viewing platform over the Steinsdalen and Norheimsund. 
            The waterfall, with its 50 meter high drop, has become a popular attraction. </p> 
        </div> 
        {/* Bondhusvanet */}
        <div className="col-sm-6 border p-2">
          <h5>Bondhusvatnet</h5>  
          <img src={Bondhusvatnet} class="img-fluid" width="50%" alt="Bonhusvatnet" />
          <p className="card-text">Bondhusdalen was the site for the opening ceremony of Folgefonna National Park in 2005.  
            Queen Sonja of Norway’s signature is on a rock by the lake. 
            The hike up to Bondhusvatnet lake is an easy hike. 
            The round trip is about 4.5 km and takes about 2 hours. 
            You can continue the trail to the far end of the lake for a better view of the Bondhusbrea icefall or continue past the lake to a moraine below Bondhusbrea. 
            The hike is about three hours to the far end of the lake and back again, and four hours if you’re hiking to the moraine.</p> 
          <a href="https://folgefonna.info/en/folgefonnas-many-attractions/bondhusdalen-valley/" target="_blank" rel="noreferrer">Bondhusvatnet</a>  
        </div> 
        {/* Furebergsfossen */}
        <div className="col-sm-6 border p-2">
          <h5>Furebergsfossen</h5> 
          <img src={Furebergsfossen} class="img-fluid" width="50%" alt="Furebergsfossen" />
          <p>The Furebergfossen waterfall flows under the road and directly into the Maurangerfjord, an arm of the Hardangerfjord. 
            Since the waterfall ends up under the road, you can get very close to the waterfall. </p>
        </div> 
        {/* Barioniet */}
        <div className="col-sm-6 border p-2">
          <h5>Baroniet Rosendal</h5>
          <img src={BarionetManor} class="img-fluid" alt="Baroniet Rosendal" />
          <p>Baroniet Rosendal is Norway's only barony and Scandinavia's smallest castle. The manor was finished in 1665. 
            It is well known for its beautiful rose garden and landscape garden created over 300 years ago.
            You can explore the Barony in Rosendal and garden which is full of beautiful and fragrant flowers. 
            The barony serves coffee and cake in the Tea Room, light lunches in the Rosendal Greenhouse, and three or five course gourmet dinners in the Blue Dining Room. 
          </p> 
        </div> 
        {/* Fjellhaugvatn */}
        <div className="col-sm-6 border p-2">
          <h5>Fjellhaugvatn</h5>
          <img src={Fjellhaugvatn} class="img-fluid" alt="Fjellhaugvatn" />
          <p>Lake with a small waterfall</p> 
        </div> 
      </div> 
    </div>
    );
};

export default JondalAttractions; 