import React from "react";
import BergenAttractions from "../components/Details/BergenAttractions";
import BergenRestaurants from "../components/Details/BergenRestaurants";

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