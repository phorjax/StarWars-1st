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
        <div className="container" >
        <div id="float">
       <img className="rounded" src="https://swall.teahub.io/photos/small/19-194993_star-earth-hd-wallpapers-1280-x-800.jpg" />
       <p id="container">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?".</p>

       </div>
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