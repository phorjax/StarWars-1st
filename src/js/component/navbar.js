import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext" 
export const Navbar = () => {
	const {store, actions} = useContext(Context) 
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img id="topPic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Star_Wars_-_The_Force_Awakens_logo.png/330px-Star_Wars_-_The_Force_Awakens_logo.png" /> </span>
			</Link>
			<div className="ml-auto">
			<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
	Favorites  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
   		{store.Favorites.map((item, index) => {
				return (<li className="navbar" key={index}><div>{item.name}</div> <div onClick={() => actions.deleteFavorites(index)}><i className="fa-regular fa-trash-can"></i></div></li>)
   })} 
   
  </ul>
</div>
			</div>
		</nav>
	);
};
