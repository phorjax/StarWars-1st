
import React, {useContext} from "react";
import "../../styles/home.css";

import {Context} from "../store/appContext"
export const Home = () => {
	const {store, actions} = useContext(Context);
	return (
		<div className="container overflow-auto">
			<h2>Characters</h2>
		<div className="d-flex flex-row flex-nowrap">
			
			{store.People.results && store.People.results.map((character, index)=> {
				return (
					<div className="card" key={index}   style={{minWidth: "18rem"}}>
		<img src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png" className="card-img-top" alt="..." />
		<div className="card-body d-flex flex-column">
		  <h5 className="card-title">{character.name}</h5>
		  <p className="card-text">{}</p>
		  <div className="navbar"><a href="#" className="btn btn-outline-primary">Learn more</a>
		  <button className="btn" onClick={()=> actions.addtoFavorites(character)}><i className="fa-regular fa-heart"></i></button> </div>
		</div>
	  </div>
				)
			}) } <br />
			</div>
			<div><h2>Planets</h2></div>
			<div className="d-flex roller flex-row flex-nowrap" >
			{store.Planets.results && store.Planets.results.map((item, index) => {
				{console.log(item)}
				return (

				<div className="card" key={index}   style={{minWidth: "18rem"}}>
				<img src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png" className="card-img-top" alt="..." />
				<div className="card-body d-flex flex-column">
				  <h5 className="card-title">{item.name}</h5>
				  <p className="card-text">{}</p>
				  <div className="navbar"><a href="#" className="btn btn-outline-primary">Learn more</a>
		  <button className="btn"><i className="fa-regular fa-heart"></i></button> </div>
				</div>
			  </div>


			)})}
			</div>
			</div>

	)
};
