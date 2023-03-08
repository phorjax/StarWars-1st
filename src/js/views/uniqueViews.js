import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const UniqueViews = (char) => {
        
    const {store, actions} = useContext(Context);
    let favs = store.favorites.find((fav) => fav.name == char.name);
    const {id} = useParams();
    useEffect(() => {

        actions.getData();

    },[])
    return (
        <div >
            <span>
           <img src="https://swall.teahub.io/photos/small/19-194993_star-earth-hd-wallpapers-1280-x-800.jpg" /> 
           {/* <h2>{character.name}</h2> */}
           </span>
            <hr/>
            <div id="uniqueview" className="text-danger">
            <p>Name</p>
            <p>gender</p>
            <p>Height</p>
            <p>Birth year</p>
            <p>Eye color</p>
            </div>
            <div id="uniqueview" className="text-danger">
            <p>{store.people[id]?.name}</p>
            <p>{store.people[id]?.gender}</p>
            <p>{store.people[id]?.height}</p>
            <p>{store.people[id]?.birth_year}</p>
            <p>{store.people[id]?.eye_color}</p>
            </div>
        </div>
            



    )
}