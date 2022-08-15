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

const HardangerfjordAttractions = () => {
  return (
    <div className="container HardangerfjordAttractions"> 
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
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src={Steinsdalfossen} class="card-img-top" alt="Steinsdalfossen" />
            <div className="card-body">
              <h5 className="card-title">Steinsdalfossen</h5>   
              <p className="card-text">Go behind the waterfall at Steinsdalfossen! 
              The path allows you to walk under the waterfall to a viewing platform over the Steinsdalen and Norheimsund. 
              The waterfall, with its 50 meter high drop, has become a popular attraction. </p> 
            </div> 
          </div>
        </div> 
        {/* Bondhusvanet */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src={Bondhusvatnet} class="card-img-top" alt="Bonhusvatnet" />
            <div className="card-body">
              <h5 className="card-title">Bondhusvatnet</h5>   
              <p className="card-text">Bondhusdalen was the site for the opening ceremony of Folgefonna National Park in 2005.  
              Queen Sonja of Norway’s signature is on a rock by the lake. 
              The hike up to Bondhusvatnet lake is an easy hike. 
              The round trip is about 4.5 km and takes about 2 hours. 
              You can continue the trail to the far end of the lake for a better view of the Bondhusbrea icefall or continue past the lake to a moraine below Bondhusbrea. 
              The hike is about three hours to the far end of the lake and back again, and four hours if you’re hiking to the moraine.</p> 
              <a href="https://folgefonna.info/en/folgefonnas-many-attractions/bondhusdalen-valley/" target="_blank" rel="noreferrer">Bondhusvatnet</a>  
            </div> 
          </div>
        </div> 
        {/* Trolltunga */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src={Trolltunga} class="card-img-top" alt="Trolltunga" />
            <div className="card-body">
              <h5 className="card-title">Trolltunga</h5>   
              <p className="card-text">XXX</p> 
            </div> 
          </div>
        </div> 
        {/* Furebergsfossen */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src={Furebergsfossen} class="card-img-top" alt="Furebergsfossen" />
            <div className="card-body">
              <h5 className="card-title">Furebergsfossen</h5>   
              <p className="card-text">XXX</p> 
            </div> 
          </div>
        </div> 
        {/* Låtefossen */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src={Latefossen}class="card-img-top" alt="Låtefossen" />
            <div className="card-body">
              <h5 className="card-title">Låtefossen</h5>   
              <p className="card-text">XXX</p> 
            </div> 
          </div>
        </div> 
        {/* Four Waterfalls Hike */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src="..." class="card-img-top" alt="XXX" />
            <div className="card-body">
              <h5 className="card-title">Four Waterfalls Hike</h5>   
              <p className="card-text">XXX</p> 
            </div> 
          </div>
        </div> 
        {/* Storanes */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src="..." class="card-img-top" alt="XXX" />
            <div className="card-body">
              <h5 className="card-title">Storanes</h5>   
              <p className="card-text">XXX</p> 
            </div> 
          </div>
        </div> 
        {/* Freimslia Viewpoint */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src="..." class="card-img-top" alt="XXX" />
            <div className="card-body">
              <h5 className="card-title">Freimslia Viewpoint</h5>   
              <p className="card-text">XXX</p> 
            </div> 
          </div>
        </div> 
        {/* Badeplassen */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src="..." class="card-img-top" alt="XXX" />
            <div className="card-body">
              <h5 className="card-title">Badeplassen</h5>   
              <p className="card-text">XXX</p> 
            </div> 
          </div>
        </div> 
        {/* Glacier Hike Tour */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src="..." class="card-img-top" alt="XXX" />
            <div className="card-body">
              <h5 className="card-title">Glacier Hike with Folgefonni Glacier Team</h5>   
              <p className="card-text">XXX</p> 
              <a href="https://www.folgefonni.no/tours/blue-ice-hike" class="btn btn-primary" target="_blank" rel="noreferrer">Blue Ice Glacier Hike</a> 
              <a href="https://www.folgefonni.no/tours#kayaking" class="btn btn-primary" target="_blank" rel="noreferrer">Kayaking Tours</a> 
            </div> 
          </div>
        </div> 
        {/* Buardalen Hike */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src={BuardalenHike} class="card-img-top" alt="Buardalen Hike" />
            <div className="card-body">
              <h5 className="card-title">Hike to the Buerbreen Glacier</h5>   
              <p className="card-text">From Buer, you can walk to the edge of the Buerbreen glacier. 
              You cand see the blue ice of the glacier throughout the hike. 
              The hike from Buer to the glacier's edge and back is about 6 km and takes about 3 hours. </p> 
              <a href="https://folgefonna.info/en/folgefonnas-many-attractions/buardalen-a-hike-to-the-edge-of-the-glacier/" target="_blank" rel="noreferrer">Buardalen Hike</a>  
            </div> 
          </div>
        </div>
        {/* Fjord cruise */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src="..." class="card-img-top" alt="XXX" />
            <div className="card-body">
              <h5 className="card-title">Fjord Cruise</h5>   
              <p className="card-text">Enjoy the views of Hardangerfjord from the Vision of the Fjords. The boat trip is popularly referred to as the cider boat. You can take the trip as a pure fjord cruise or combine it with cider tasting and visit the local cider producers along the way.
              </p>
              <a href="https://www.thefjords.no/en/fjordcruise/the-hardangerfjord/" class="btn btn-primary" target="_blank" rel="noreferrer">Hardangderfjord Cruise</a> 
            </div> 
          </div>
        </div> 
        {/* Heit Sorfjorden Sauna */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src={HeitSorfjordenSauna} class="card-img-top" alt="Heit Sørfjorden Sauna" />
            <div className="card-body">
              <h5 className="card-title">Heit Sørfjorden Sauna</h5>   
              <p className="card-text">XXX</p> 
              <a href="https://en.heitsauna.com/" class="btn btn-primary" target="_blank" rel="noreferrer">Heit Sørfjorden Sauna</a>
            </div> 
          </div>
        </div> 
        {/* Alde Sider */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src="..." class="card-img-top" alt="XXX" />
            <div className="card-body">
              <h5 className="card-title">Alde Sider</h5>   
              <p className="card-text">XXX</p> 
            </div> 
          </div>
        </div> 
        {/* Aga Sideri */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src="..." class="card-img-top" alt="XXX" />
            <div className="card-body">
              <h5 className="card-title">Aga Sideri</h5>   
              <p className="card-text">XXX</p> 
            </div> 
          </div>
        </div> 
        {/* Siderhuset Ola K */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src={OlaK} class="card-img-top" alt="Siderhuset Ola K" />
            <div className="card-body">
              <h5 className="card-title">Siderhuset Ola K</h5>   
              <p className="card-text">Cider house and restaurant located right along the fjord in Nå, about 20 minutes from Odda. 
              The restaurant offers a 2-course lunch or 3-course dinner.</p> 
              <a href="https://www.olak.no/" class="btn btn-primary" target="_blank" rel="noreferrer">Siderhuset Ola K</a> 
            </div> 
          </div>
        </div> 
        {/* Dolce Vidda */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src="..." class="card-img-top" alt="XXX" />
            <div className="card-body">
              <h5 className="card-title">DolceVidda</h5>   
              <p className="card-text">Italian gelato and sorbet</p> 
              <a href="https://www.facebook.com/gelato.hardanger/?fref=ts" class="btn btn-primary" target="_blank" rel="noreferrer">DolceVidda</a> 
            </div> 
          </div>
        </div> 
        {/* Barioniet */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src="..." class="card-img-top" alt="XXX" />
            <div className="card-body">
              <h5 className="card-title">Barony Rosendal</h5>   
              <p className="card-text">XXX</p> 
            </div> 
          </div>
        </div> 
        {/* Haereid */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src="..." class="card-img-top" alt="XXX" />
            <div className="card-body">
              <h5 className="card-title">Haereidsmoen Iron Age Burial Field</h5>   
              <p className="card-text">XXX</p> 
            </div> 
          </div>
        </div> 
        {/* Tvindefossen  */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src={Tvindefossen} class="card-img-top" alt="Tvindefossen" />
            <div className="card-body">
              <h5 className="card-title">Tvindefossen</h5>   
              <p className="card-text">XXX</p> 
            </div> 
          </div>
        </div> 
        {/* Skjervefossen */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src={Skjervefossen} class="card-img-top" alt="Skjervefossen" />
            <div className="card-body">
              <h5 className="card-title">Skjervefossen</h5>   
              <p className="card-text">XXX</p> 
            </div> 
          </div>
        </div>
        {/* Kayak or SUP in Voss */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src="..." class="card-img-top" alt="XXX" />
            <div className="card-body">
              <h5 className="card-title">Kayaking or SUP rental in Voss</h5>   
              <p className="card-text">XXX</p> 
              <a href="https://www.vossflow.no/bookings-checkout/river-standup-paddle-boarding/book" class="btn btn-primary" target="_blank" rel="noreferrer">Voss Flow</a>
              <a href="https://www.outdoornorway.com/sup-rentals/" class="btn btn-primary" target="_blank" rel="noreferrer">Outdoor Norway</a>
            </div> 
          </div>
        </div>
        {/* Voringsfossen */}
        <div className="col-sm-6">
          <div className="card" style={{width:'18rem'}} border>
            <img src={Voringfossen} class="card-img-top" alt="Vøringfossen" />
            <div className="card-body">
              <h5 className="card-title">Vøringfossen</h5>   
              <p className="card-text">XXX</p> 
            </div> 
          </div>
        </div>
      </div> 
    </div>
    );
};

export default HardangerfjordAttractions; 