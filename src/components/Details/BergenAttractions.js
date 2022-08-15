import React from "react";
import Bryggen from "./images/Bryggen.jpg";
import Floibanen from "./images/Floibanen.jpg";
import BergenMap from "./images/BergenMap.png";
import Bergenhus from "./images/Bergenhus.jpg";
import Floyen from "./images/Floyen.jpg";
import Floyen2 from "./images/Floyen2.jpg";
import UlrikenHike from "./images/UlrikenHike.jpg";
import UlrikenCableCar from "./images/UlrikenCableCar.JPG";
import FantoftStaveChurch from "./images/FantoftStaveChurch.jpg";
import HeitBergenSauna from "./images/HeitBergenSauna.jpg";
import HorsebackRiding from "./images/HorsebackRiding.webp";

const BergenAttractions = () => {
  return (
    <div className="BergenAttractions m-3"> 
      <h2>Attractions</h2>
      <img src={BergenMap} class="img-fluid" width="50%" alt="Bergen Map"/>
      <ol>
        <li> Bryggen</li>
        <li> Fløibanen</li>
        <li> Fløyen</li>
        <li> Bergenhus Fortress</li>
        <li> Ulriken Trailhead</li>
        <li> Ulriken</li>
        <li> City Sauna Bergen</li>
        <li> Heit Bergen Sauna</li>
        <li> Fantoft Stave Church</li>
      </ol>
      <div className="row">
        {/* Bryggen */}
        <div className="col-sm-6 border p-2">
          <h5>Bryggen</h5>   
          <img src={Bryggen} class="img-fluid" width="50%" alt="Bryggen"/>
          <p>Bryggen is one of Bergen's and Norway's main attractions. 
            Bryggen was built after the great fire in 1702 and is included on UNESCO's World Heritage List. 
            The world heritage site consists of the old Hanseatic wharf and buildings, and one of the best known urban areas from the Middle Ages in all of Norway. 
            In 1360, the German Hanseatic League set up one of its import and export offices at Bryggen, dominating trade for almost 400 years. 
            Today, the area consists of small shops, galleries, and artist studios. </p>  
        </div>                    
      {/* Fløibanen */}
      <div className="col-sm-6 border p-2">
        <h5>Fløibanen</h5>
        <img src={Floibanen} class="img-fluid" width="50%" alt="Fløibanen"/>
        <p>Fløibanen is a funicular railway that runs from the centre of Bergen to Fløyen (320 m above sea level) and is one of Norway's most visited attractions.  
          The funiculars “Rødhette” (the red one) and “Blåmann” (the blue one) takes you to the mountain top in just a few minutes! </p>
          <a href="https://floyen.no/en/floibanen" target="_blank" rel="noreferrer">Fløibanen</a>  
      </div>
      {/* Fløyen */}
      <div className="col-sm-6 border p-2">
        <h5>Fløyen</h5>  
        <img src={Floyen} class="img-fluid p-1" width="50%" alt="Fløyen"/>
        <img src={Floyen2} class="img-fluid p-1" width="40%" alt="Wood carving in Fløyen"/>
        <p>Fløyen is one of Bergen's seven mountains. 
          Fløyen is a large hiking area with lots of trails and different views of the city. 
          To get to  Fløyen, it is about a 3 km hike from the city center or you can take Fløibanen. 
          At the top of Fløibanen, there is a viewing platform with cafès, a restaurant, shop, and goats. </p>  
          <a href="https://floyen.no/en/activities/walks-hikes-floyen/" target="_blank" rel="noreferrer">Fløyen</a> 
      </div>
      {/* Bergenhus */}
      <div className="col-sm-6 border p-2">
        <h5>Bergenhus Fortress</h5>  
        <img src={Bergenhus} class="img-fluid" width="50%" alt="Bergenhus"/> 
        <p>Bergenhus Fortress is one of Norway's oldest and best preserved fortifications. 
        Today, Bergenhus Fortress is made up of the grounds within the ramparts,  originally known as Holmen, and Koengen and Sverresborg. 
        In the 1700s these three areas were consolidated into one vast military fortification, with the ramparts across Koengen joining Holmen and Sverresborg together. 
        The ramparts at Koengen were eventually torn down in 1809.</p>  
      </div>
      {/* Ulriken Trailhead */}
      <div className="col-sm-6 border p-2">
        <h5>Ulriken Trailhead</h5>   
        <img src={UlrikenHike} class="img-fluid" width="50%" alt="Ulriken Hike"/>
        <p>The hike to Ulriken is one of the most popular hikes in Bergen. 
          The hike takes you up 1333 Sherpa steps and takes about 1.5 hours. 
          It is steep, but you are rewarded with stunning views along the way and of course panoramic views of Bergen and the surroundings from the top. 
          From the top, you can take the hike back down or ride the cable car down. </p>  
      </div>
      {/* Ulriken */}
      <div className="col-sm-6 border p-2">
        <h5>Ulriken</h5>   
        <img src={UlrikenCableCar} class="img-fluid" width="50%" alt="Ulriken"/>
        <p>Ulriken is the highest of Bergen's seven mountains. 
          You can get to the top of Ulriken by hiking up or taking the cable car. 
          At the top of Ulriken is Skyskraperen Restaurant and a cafe. 
          <br></br>
          You can also experience Norway's fastest zipline from the top of Ulriken.  
          The Zipline starts under the terrace in front of the restaurant on Mt. Ulriken, and glides 300 meters in the direction of Mt. Fløyen. 
          After the zipline, you hike back to the starting point. 
          The zipline is only open on Saturday and Sunday in September. 
          Price is about $50 per person. </p>  
          <a href="https://ulriken643.no/en" target="_blank" rel="noreferrer">Ulriken</a> 
          <a href="https://www.bergenbasecamp.no/aktivitet/the-fastest-zipline-in-norway" target="_blank" rel="noreferrer">Zipline at Ulriken</a> 
      </div>
      {/* Sauna */}
      <div className="col-sm-6 border p-2">
        <h5>Sauna</h5>
        <img src={HeitBergenSauna} class="img-fluid" width="50%" alt="Heit Bergen Sauna"/>
        <p>There are 2 sauna groups in Bergen. 
          Heit Bergen Sauna is on a floating pier. 
          City Sauna offers both sauna options docked in the fjord or as a fjord cruise. </p>
          <a href="https://en.heitbergensauna.com/" target="_blank" rel="noreferrer">Heit Bergen Sauna</a> 
          <a href="https://www.citysauna.no/en" target="_blank" rel="noreferrer">City Sauna</a>
      </div>
      {/* Fantoft Stave Church */}
      <div className="col-sm-6 border p-2">
        <h5>Fantoft Stave Church</h5>
        <img src={FantoftStaveChurch} class="img-fluid" width="50%" alt="Fantoft Stave Church"/>
        <p>The old stave church was originally built in Fortun in Sogn in 1170. In 1883, the stave church was demolished and rebuilt in Fantoft. 
          Fantoft Stave Church burned to the ground in 1992. 
          The church was rebuilt in 1997. 
          The only remaining objects from the original church are a wish stone that is placed in one wall, and the cross at the altar.</p>
      </div>
      {/* Horseback riding */}
      <div className="col-sm-6 border p-2">
        <h5>Horseback riding at Øvre-Eide Gård</h5>
        <img src={HorsebackRiding} class="img-fluid" width="50%" alt="Horseback riding at Øvre-Eide Gård"/>
        <p>Øvre-Eide Gård offers horseback riding tours in the mountains surrounding Bergen. 
          The most popular trip goes to Sandviksbatteriet - a two-hour excursion where you can enjoy views of Bergen and the surrounding archipelago. 
          The riding tour starts at the farm where you meet the horses and the guide. 
          You are welcome to help groom and prepare the horses before the trip. 
          Price is about $80 per hour. </p>
          <a href="https://www.ovre-eide.no/ridingibergen" target="_blank" rel="noreferrer">Øvre-Eide Gård</a>
      </div>
      {/* City walking tour - I love Bergen */}
      <div className="col-sm-6 border p-2">
        <h5>I Love Bergen Walking Tour</h5>
        <p>I Love Bergen offers guided walking tours through the city. 
          Each tour is 2 hours long and covers about 3 km. 
          Price is about $25 per person</p>
          <a href="https://www.ilovebergen.net/" target="_blank" rel="noreferrer">I Love Bergen</a>
      </div>
    </div>
    </div>
    );
};

export default BergenAttractions; 