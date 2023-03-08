import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { People } from "../component/people";
import { Planets } from "../component/planets";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <section>
        <h2>People</h2>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          {store.people.map((character, index) => {
            return <People key={index} char={character} link = {"/people/" + index} />;
          })}
        </div>
      </section>

      <section>
        <h2>Planets</h2>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          {store.planets.map((world, index) => {
            return <Planets key={index} planet={world} link = {"/planets/" + index} />;
          })}
        </div>
      </section>
      
    </div>
  );
};
