import React from "react";
import BergenAttractions from "../components/BergenComponents/BergenAttractions";
import BergenRestaurants from "../components/BergenComponents/BergenRestaurants";

const Bergen = () => {
    return (
        <div>
            <h1>Bergen</h1>
            <BergenAttractions />
            <BergenRestaurants />
        </div>
    );
};

export default Bergen; 