import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const UniqueViewsPlanets = (char, link) => {
        
    const {store, actions} = useContext(Context);
    let favs = store.favorites.find((fav) => fav.name == char.name);
    const {id} = useParams();
    useEffect(() => {

        actions.getData();

    },[])
    return (
        <div className="container" >
            <div id="float">
           <img className="rounded" src="https://swall.teahub.io/photos/small/19-194993_star-earth-hd-wallpapers-1280-x-800.jpg" />
           <p id="container">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?".</p>

           </div>
            <hr/>
            <div id="uniqueview" className="text-danger">
            <p>Name</p>
            <p>Climate</p>
            <p>Population</p>
            <p>Orbital Period</p>
            <p>Rotation Period</p>
            <p>Diameter</p>

            </div>
            <div id="uniqueview" className="text-danger">
            <p>{store.planets[id]?.name}</p>
            <p>{store.planets[id]?.climate}</p>
            <p>{store.planets[id]?.population}</p>
            <p>{store.planets[id]?.orbital_period}</p>
            <p>{store.planets[id]?.rotation_period}</p>
            <p>{store.planets[id]?.diameter}</p>
            </div>
        </div>
            



    )
}