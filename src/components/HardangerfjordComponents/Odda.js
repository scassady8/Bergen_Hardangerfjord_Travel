import React from "react";
import Trolltunga from "./HardangerfjordImages/TrolltungaNew.jpg";
import HeitSorfjordenSauna from "./HardangerfjordImages/HeitSorfjordenSauna.jpg";
import Latefossen from "./HardangerfjordImages/Latefossen.jpg";
import OlaK from "./HardangerfjordImages/OlaK.jpg";
import BuardalenHike from "./HardangerfjordImages/BuardalenHike.jpg";
import Storanes from "./HardangerfjordImages/Storanes.png";
import Freimslia from "./HardangerfjordImages/Freimslia.png";
import FjordCruise from "./HardangerfjordImages/FjordCruise.jpg";
import Tveitafossen from "./HardangerfjordImages/Tveitafossen.jpg";
import Nyastolfossen from "./HardangerfjordImages/Nyastolfossen.jpg";
import Nykkjesoyfossen from "./HardangerfjordImages/Nykkjesoyfossen.jpg";
import Sotefossen from "./HardangerfjordImages/Sotefossen.jpg";


const OddaAttractions = () => {
  return (
    <div className="container OddaAttractions m-3"> 
      <h2>Near Odda</h2>
      <div className="row">
        {/* Trolltunga */}
        <div className="col-sm-6 border p-2">
          <h5>Trolltunga</h5>  
          <img src={Trolltunga} class="img-fluid" width="50%" alt="Trolltunga" />
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
          <img src={Tveitafossen} class="img-fluid m-1" width="50%" alt="Tveitafossen" />  
          <img src={Nyastolfossen} class="img-fluid m-1" width="50%" alt="NyastølsfossenXXX" />
          <img src={Nykkjesoyfossen} class="img-fluid m-1" width="50%" alt="Nykkjesøyfossen" />
          <img src={Sotefossen} class="img-fluid m-1" width="50%" alt="Søtefossen" />       
          <p>This trail has been known for decades as one of the most beautiful hikes in Norway. 
            Four stunning waterfalls are close to each other along the hiking trail from Kinsarvik up to the Hardangervidda mountain plateau. 
            The four waterfalls are Tveitafossen, Nyastølsfossen, Nykkjesøyfossen, and Søtefossen.  
            A hike from the car park to the uppermost fall and back takes 5-6 hours.  
            Some parts are demanding and steep. The trail can be slippery when wet. </p> 
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
          <a href="https://www.folgefonni.no/tours/blue-ice-hike" class="btn btn-primary m-2" target="_blank" rel="noreferrer">Blue Ice Glacier Hike</a> 
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
          <p>Cider mill outside of Nå</p> 
          <a href="https://www.aldesider.no/" class="btn btn-primary" target="_blank" rel="noreferrer">Alde Sider</a> 
        </div> 
        {/* Aga Sideri */}
        <div className="col-sm-6 border p-2">
          <h5>Aga Sideri</h5>
          <img src="..." class="img-fluid" alt="XXX" />
          <p>Cider mill outside of Nå</p> 
          <a href="https://www.agasideri.no/" class="btn btn-primary" target="_blank" rel="noreferrer">Aga Sideri</a> 
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
      </div> 
    </div>
    );
};

export default OddaAttractions; 