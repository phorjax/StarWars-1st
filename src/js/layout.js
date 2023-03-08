import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import {Favorites} from "./component/Favorites.jsx" 
import { Home } from "./views/home";
import { Single } from "./views/character";
import injectContext from "./store/appContext";
// his app.js is my layout.js
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { UniqueViews } from "./views/uniqueViews";
import { UniqueViewsPlanets } from "./views/uniqueViewsPlanets";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div id="container">
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/people/:id" element={<UniqueViews />} />
						<Route path="/planets/:id" element={<UniqueViewsPlanets />} />

						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
