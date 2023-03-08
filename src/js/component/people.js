import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = ({ char, link }) => {
  const { store, actions } = useContext(Context);
  let favs = store.favorites.find((fav) => fav.name == char.name);

  return (
    <div className="card" style={{ minWidth: "18rem" }}>
      <img
        className="card-img-top"
        src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png"
        alt="Card image cap"
      ></img>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{char.name}</h5>
        <div>Gender: {char.gender}</div>
        <div>Height: {char.height} cm</div>
        <div>Birth Year: {char.birth_year}</div>
        <div className="navbar">
                    <a href={link ? link:"#"} className="btn btn-outline-primary">
                      Learn more!
                    </a>
					
          <span
            onClick={() =>
              favs ? actions.deleteFav(char.name) : actions.addFav(char)
            }
          >
            <i className={favs ? "fas fa-heart" : "far fa-heart"}></i>
          </span>
        </div>
      </div>
    </div>
  );
};

People.propTypes = {
  match: PropTypes.object,
};
