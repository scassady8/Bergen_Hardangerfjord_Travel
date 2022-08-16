import React from "react";
import HardangerfjordMap from "./images/HardangerfjordMap.png";
import Steinsdalfossen from "./images/Steinsdalfossen.jpg";
import Trolltunga from "./images/TrolltungaNew.jpg";
import Bondhusvatnet from "./images/Bondhusvatnet.jpg";
import Furebergsfossen from "./images/Furebergsfossen.jpg";
import HeitSorfjordenSauna from "./images/HeitSorfjordenSauna.jpg";
import Latefossen from "./images/Latefossen.jpg";
import OlaK from "./images/OlaK.jpg";
import Skjervefossen from "./images/Skjervefossen.jpg";
import Tvindefossen from "./images/Tvindefossen.jpg";
import Voringfossen from "./images/Voringfossen.jpeg";
import BuardalenHike from "./images/BuardalenHike.jpg";
import Storanes from "./images/Storanes.png";
import Freimslia from "./images/Freimslia.png";
import FjordCruise from "./images/FjordCruise.jpg";

const HardangerfjordAttractions = () => {
  return (
    <div className="container HardangerfjordAttractions m-3"> 
      <h2>Attractions</h2>
      <img src={HardangerfjordMap} class="img-fluid" width="50%" alt="Hardangerfjord Map"/>
      {/* */}
      <ol>
        <li>Steinsdalfossen</li>
        <li>Furebergsfossen</li>
        <li>Bondhusvatn</li>
        <li>Barony Rosendal</li>
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
        <li>Voss Gondola</li>
      </ol>
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
        {/* Trolltunga */}
        <div className="col-sm-6 border p-2">
          <h5>Trolltunga</h5>  
          <img src={Trolltunga} class="img-fluid" width="50%" alt="Trolltunga" />
          <p>XXX</p> 
        </div> 
        {/* Furebergsfossen */}
        <div className="col-sm-6 border p-2">
          <h5>Furebergsfossen</h5> 
          <img src={Furebergsfossen} class="img-fluid" width="50%" alt="Furebergsfossen" />
          <p>XXX</p>
        </div> 
        {/* Låtefossen */}
        <div className="col-sm-6 border p-2">
          <h5>Låtefossen</h5> 
          <img src={Latefossen} class="img-fluid" width="50%" alt="Låtefossen" />
          <p>XXX</p> 
        </div> 
        {/* Four Waterfalls Hike */}
        <div className="col-sm-6 border p-2">
          <h5>Four Waterfalls Hike</h5> 
          <img src="..." class="img-fluid" width="50%" alt="XXX" />           
          <p>XXX</p> 
        </div> 
        {/* Storanes */}
        <div className="col-sm-6 border p-2">
          <h5>Storanes</h5>
          <img src={Storanes} class="img-fluid" width="50%" alt="View from Storanes" />
          <p>Viewpoint on Sandevatnet Lake</p> 
        </div> 
        {/* Freimslia Viewpoint */}
        <div className="col-sm-6 border p-2">
          <h5>Freimslia Viewpoint</h5>
          <img src={Freimslia} class="img-fluid" width="50%" alt="View from Freimslia" />  
          <p>Viewpoint over Odda and Hardangerfjord</p> 
        </div> 
        {/* Badeplassen */}
        <div className="col-sm-6 border p-2">
          <h5>Badeplassen</h5>
          <img src="..." class="img-fluid" alt="XXX" />  
          <p>Swimming area</p> 
        </div> 
        {/* Glacier Hike Tour */}
        <div className="col-sm-6 border p-2">
          <h5>Glacier Hike with Folgefonni Glacier Team</h5> 
          <img src="..." class="img-fluid" alt="XXX" />
          <p className="card-text">XXX</p> 
          <a href="https://www.folgefonni.no/tours/blue-ice-hike" class="btn btn-primary" target="_blank" rel="noreferrer">Blue Ice Glacier Hike</a> 
          <a href="https://www.folgefonni.no/tours#kayaking" class="btn btn-primary" target="_blank" rel="noreferrer">Kayaking Tours</a> 
        </div> 
        {/* Buardalen Hike */}
        <div className="col-sm-6 border p-2">
          <h5>Hike to the Buerbreen Glacier</h5>   
          <img src={BuardalenHike} class="img-fluid" width="50%" alt="Buardalen Hike" /> 
          <p>From Buer, you can walk to the edge of the Buerbreen glacier. 
            You cand see the blue ice of the glacier throughout the hike. 
            The hike from Buer to the glacier's edge and back is about 6 km and takes about 3 hours. </p> 
          <a href="https://folgefonna.info/en/folgefonnas-many-attractions/buardalen-a-hike-to-the-edge-of-the-glacier/" target="_blank" rel="noreferrer">Buardalen Hike</a>  
        </div>
        {/* Fjord cruise */}
        <div className="col-sm-6 border p-2">
          <h5>Fjord Cruise</h5>   
          <img src={FjordCruise} class="img-fluid" width="50%" alt="Fjord cruise in Hardangerfjord" />
          <p>Enjoy the views of Hardangerfjord from the Vision of the Fjords. 
            The boat trip is popularly referred to as the cider boat. 
            You can take the trip as a pure fjord cruise or combine it with cider tasting and visit the local cider producers along the way.
          </p>
          <a href="https://www.thefjords.no/en/fjordcruise/the-hardangerfjord/" class="btn btn-primary" target="_blank" rel="noreferrer">Hardangderfjord Cruise</a> 
        </div> 
        {/* Heit Sorfjorden Sauna */}
        <div className="col-sm-6 border p-2">
          <h5 className="card-title">Heit Sørfjorden Sauna</h5> 
          <img src={HeitSorfjordenSauna} class="img-fluid" width="50%" alt="Heit Sørfjorden Sauna" />
          <p className="card-text">XXX</p> 
          <a href="https://en.heitsauna.com/" class="btn btn-primary" target="_blank" rel="noreferrer">Heit Sørfjorden Sauna</a>
        </div> 
        {/* Alde Sider */}
        <div className="col-sm-6 border p-2">
          <h5>Alde Sider</h5>
          <img src="..." class="img-fluid" alt="XXX" />
          <p>XXX</p> 
        </div> 
        {/* Aga Sideri */}
        <div className="col-sm-6 border p-2">
          <h5>Aga Sideri</h5>
          <img src="..." class="img-fluid" alt="XXX" />
          <p>XXX</p> 
        </div> 
        {/* Siderhuset Ola K */}
        <div className="col-sm-6 border p-2">
          <h5>Siderhuset Ola K</h5> 
          <img src={OlaK} class="img-fluid" width="50%" alt="Siderhuset Ola K" />
          <p>Cider house and restaurant located right along the fjord in Nå, about 20 minutes from Odda. 
            The restaurant offers a 2-course lunch or 3-course dinner.
          </p> 
          <a href="https://www.olak.no/" class="btn btn-primary" target="_blank" rel="noreferrer">Siderhuset Ola K</a> 
        </div> 
        {/* Dolce Vidda */}
        <div className="col-sm-6 border p-2">
          <h5>DolceVidda</h5>   
          <img src="..." class="img-fluid" alt="XXX" />
          <p>Italian gelato and sorbet</p> 
          <a href="https://www.facebook.com/gelato.hardanger/?fref=ts" class="btn btn-primary" target="_blank" rel="noreferrer">DolceVidda</a> 
        </div> 
        {/* Barioniet */}
        <div className="col-sm-6 border p-2">
          <h5>Barony Rosendal</h5>
          <img src="..." class="img-fluid" alt="XXX" />
          <p>XXX</p> 
        </div> 
        {/* Haereid */}
        <div className="col-sm-6 border p-2">
          <h5>Haereidsmoen Iron Age Burial Field</h5>  
          <img src="..." class="img-fluid" alt="XXX" />
          <p>XXX</p> 
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
        {/* Kayak or SUP in Voss */}
        <div className="col-sm-6 border p-2">
          <h5>Kayaking or SUP rental in Voss</h5>
          <img src="..." class="img-fluid" alt="XXX" />
          <p>XXX</p> 
          <a href="https://www.vossflow.no/bookings-checkout/river-standup-paddle-boarding/book" class="btn btn-primary" target="_blank" rel="noreferrer">Voss Flow</a>
          <a href="https://www.outdoornorway.com/sup-rentals/" class="btn btn-primary" target="_blank" rel="noreferrer">Outdoor Norway</a>
        </div>
        {/* Voringsfossen */}
        <div className="col-sm-6 border p-2">
          <h5>Vøringfossen</h5>  
          <img src={Voringfossen} class="img-fluid" width="50%" alt="Vøringfossen" />
          <p>XXX</p> 
        </div>
      </div> 
    </div>
    );
};

export default HardangerfjordAttractions; 