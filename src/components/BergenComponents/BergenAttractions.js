import React from "react";
import Bergenhus from "./BergenImages/Bergenhus.jpg";
import BergenhusChurch from "./BergenImages/BergenhusChurch.jpg";
import BergenhusInside from "./BergenImages/BergenhusInside.jpg";
import Bryggen from "./BergenImages/Bryggen.jpg";
import FantoftStaveChurch from "./BergenImages/FantoftStaveChurch.jpg";
import FantoftDetail from "./BergenImages/FantoftDetail.jpg";
import Floibanen from "./BergenImages/Floibanen.jpg";
import Floyen from "./BergenImages/Floyen.jpg";
import FloyenLake from "./BergenImages/FloyenLake.jpg";
import FloyenStatue from "./BergenImages/FloyenStatue.jpg";
import FloyenGoat from "./BergenImages/Goat.jpg";
import HeitBergenSauna from "./BergenImages/HeitBergenSauna.jpg";
import HorsebackRiding from "./BergenImages/HorsebackRiding.webp";
import UlrikenHike from "./BergenImages/UlrikenHike.jpg";
import UlrikenCableCar from "./BergenImages/UlrikenCableCar.JPG";
import UlrikenView from "./BergenImages/UlrikenView3.jpg";
import UlrikenView2 from "./BergenImages/UlrikenView2.jpg";

const BergenAttractions = () => {
  return (
    <div className="BergenAttractions m-3"> 
      <h2>Attractions</h2>
      <div className="row">
        {/* Bryggen */}
        <div className="col-sm-12 p-2">
          <h5>Bryggen</h5>   
          <p>Bryggen is one of Bergen's and Norway's main attractions. 
            Bryggen was built after the great fire in 1702 and is included on UNESCO's World Heritage List. 
            The world heritage site consists of the old Hanseatic wharf and buildings, and one of the best known urban areas from the Middle Ages in all of Norway. 
            In 1360, the German Hanseatic League set up one of its import and export offices at Bryggen, dominating trade for almost 400 years. 
            Today, the area consists of small shops, galleries, and artist studios. 
          </p>  
          <img src={Bryggen} class="img-fluid" width="50%" alt="Bryggen"/>
          <p className="caption">View of Bryggen wharf buildings</p>
        </div>                    
      {/* Fløibanen */}
      <div className="col-sm-12 p-2">
        <h5>Fløibanen</h5>
        <p>Fløibanen is a funicular railway that runs from the centre of Bergen to Fløyen (320 m above sea level) and is one of Norway's most visited attractions.  
          The funiculars “Rødhette” (the red one) and “Blåmann” (the blue one) takes you to the mountain top in just a few minutes! 
        </p>
        <a href="https://floyen.no/en/floibanen" target="_blank" rel="noreferrer">Fløibanen</a>  
        <br></br>
        <img src={Floibanen} class="img-fluid" width="50%" alt="Fløibanen"/>
      </div>
      {/* Fløyen */}
      <div className="col-sm-12 p-2">
        <h5>Fløyen</h5>  
        <p>Fløyen is one of Bergen's seven mountains. 
          Fløyen is a large hiking area with lots of trails and different views of the city. 
          To get to  Fløyen, it is about a 3 km hike from the city center or you can take Fløibanen. 
          At the top of Fløibanen, there is a viewing platform with cafès, a restaurant, shop, and goats. </p>  
        <a href="https://floyen.no/en/activities/walks-hikes-floyen/" target="_blank" rel="noreferrer">Fløyen</a> 
        <br></br>
        <img src={Floyen} class="img-fluid p-1" width="50%" alt="Fløyen"/>
        <img src={FloyenLake} class="img-fluid p-1" width="40%" alt="Lake on Mount Fløyen"/>
        <img src={FloyenStatue} class="img-fluid p-1" width="40%" alt="Wood statue in Fløyen"/>
        <img src={FloyenGoat} class="img-fluid p-1" width="40%" alt="Goat at Fløyen"/>
      </div>
      {/* Bergenhus */}
      <div className="col-sm-12 p-2">
        <h5>Bergenhus Fortress</h5>  
        <p>Bergenhus Fortress is one of Norway's oldest and best preserved fortifications. 
        Today, Bergenhus Fortress is made up of the grounds within the ramparts,  originally known as Holmen, and Koengen and Sverresborg. 
        In the 1700s these three areas were consolidated into one vast military fortification, with the ramparts across Koengen joining Holmen and Sverresborg together. 
        The ramparts at Koengen were eventually torn down in 1809.</p>  
        <img src={Bergenhus} class="img-fluid" width="50%" alt="Bergenhus"/> 
        <img src={BergenhusChurch} class="img-fluid" width="50%" alt="View of church at Bergenhus"/> 
        <img src={BergenhusInside} class="img-fluid" width="50%" alt="Interior of Bergenhus"/> 
      </div>
      {/* Ulriken Trailhead */}
      <div className="col-sm-12 p-2">
        <h5>Ulriken Trailhead</h5>   
        <p>The hike to Ulriken is one of the most popular hikes in Bergen. 
          The hike takes you up 1333 Sherpa steps and takes about 1.5 hours. 
          It is steep, but you are rewarded with stunning views along the way and of course panoramic views of Bergen and the surroundings from the top. 
          From the top, you can take the hike back down or ride the cable car down. 
        </p>  
        <img src={UlrikenHike} class="img-fluid" width="50%" alt="Ulriken Hike"/>
      </div>
      {/* Ulriken */}
      <div className="col-sm-12 p-2">
        <h5>Ulriken</h5>   
        <p>Ulriken is the highest of Bergen's seven mountains. 
          You can get to the top of Ulriken by hiking up or taking the cable car. 
          At the top of Ulriken is Skyskraperen Restaurant and a cafe. 
          <br></br>
          You can also experience Norway's fastest zipline from the top of Ulriken.  
          The Zipline starts under the terrace in front of the restaurant on Mt. Ulriken, and glides 300 meters in the direction of Mt. Fløyen. 
          After the zipline, you hike back to the starting point. 
          The zipline is only open on Saturday and Sunday in September. 
          Price is about $50 per person. 
        </p>  
        <a href="https://ulriken643.no/en" target="_blank" rel="noreferrer">Ulriken</a> 
        <a href="https://www.bergenbasecamp.no/aktivitet/the-fastest-zipline-in-norway" target="_blank" rel="noreferrer">Zipline at Ulriken</a>
        <br></br> 
        <img src={UlrikenCableCar} class="img-fluid" width="50%" alt="Ulriken"/>
        <img src={UlrikenView} class="img-fluid" width="50%" alt="Ulriken"/>
        <img src={UlrikenView2} class="img-fluid" width="50%" alt="Ulriken"/>
      </div>
      {/* Sauna */}
      <div className="col-sm-12 p-2">
        <h5>Sauna</h5>
        <p>There are 2 sauna groups in Bergen. 
          Heit Bergen Sauna is on a floating pier. 
          City Sauna offers both sauna options docked in the fjord or as a fjord cruise. 
        </p>
        <a href="https://en.heitbergensauna.com/" target="_blank" rel="noreferrer">Heit Bergen Sauna</a> 
        <a href="https://www.citysauna.no/en" target="_blank" rel="noreferrer">City Sauna</a>
        <br></br>
        <img src={HeitBergenSauna} class="img-fluid" width="50%" alt="Heit Bergen Sauna"/>
      </div>
      {/* Fantoft Stave Church */}
      <div className="col-sm-12 p-2">
        <h5>Fantoft Stave Church</h5>
        <p>The old stave church was originally built in Fortun in Sogn in 1170. In 1883, the stave church was demolished and rebuilt in Fantoft. 
          Fantoft Stave Church burned to the ground in 1992. 
          The church was rebuilt in 1997. 
          The only remaining objects from the original church are a wish stone that is placed in one wall, and the cross at the altar.
        </p>
        <img src={FantoftStaveChurch} class="img-fluid" width="50%" alt="Fantoft Stave Church"/>
        <img src={FantoftDetail} class="img-fluid" width="50%" alt="Detailed carvings at Fantoft Stave Church"/>
      </div>
      {/* Horseback riding */}
      <div className="col-sm-12 p-2">
        <h5>Horseback riding at Øvre-Eide Gård</h5>
        <p>Øvre-Eide Gård offers horseback riding tours in the mountains surrounding Bergen. 
          The most popular trip goes to Sandviksbatteriet - a two-hour excursion where you can enjoy views of Bergen and the surrounding archipelago. 
          The riding tour starts at the farm where you meet the horses and the guide. 
          You are welcome to help groom and prepare the horses before the trip. 
          Price is about $80 per hour. 
        </p>
        <a href="https://www.ovre-eide.no/ridingibergen" target="_blank" rel="noreferrer">Øvre-Eide Gård</a>
        <br></br>
        <img src={HorsebackRiding} class="img-fluid" width="50%" alt="Horseback riding at Øvre-Eide Gård"/>
      </div>
    </div>
    </div>
    );
};

export default BergenAttractions; 