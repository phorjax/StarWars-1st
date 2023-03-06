const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Planets: [],
			 People: [], 
			 Favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			addtoFavorites: (item) => {
				let store = getStore()
				store.Favorites.push(item)
				setStore(store)
			},
			deleteFavorites: (index) => {
				let store = getStore()
				let newFavorites = store.Favorites.filter((item, idx) =>
				idx != index)
				setStore({Favorites: newFavorites})
			},
			loadSomeData: () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				fetch("https://www.swapi.tech/api/people/", requestOptions)
					.then(response => response.json())
					.then(result => setStore({People: result}))
					.catch(error => console.log('error', error));

				fetch("https://www.swapi.tech/api/planets/", requestOptions)
					.then(response => response.json())
					.then(result => setStore({Planets: result}))
					.catch(error => console.log('error', error));
			},
			
			
		}
	};
};

export default getState;
