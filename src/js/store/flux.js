const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			// Defino variable let url, para que sea dinamico y poder reutilizar en otros fetch.
			fetchData: param => {
				let url = `https://www.swapi.tech/api/${param}`;
				fetch(url)
					.then(response => response.json())
					.then(data => {
						
						let information = [];
						data.results.forEach(item => {
							fetch(item.url)
								.then(response2 => response2.json())
								.then(data2 => {
									information.push(data2.result.properties);
								})
								.catch(err => console.log(err));
						});
						// si el parametro es planets me agrega la información en planetas, (lo mismo con persona y vehiculo)
						param == "planets"
							? setStore({ planets: information })
							: param == "people"
								? setStore({ people: information })
								: param == "vehicles"
									? setStore({ vehicles: information })
									: console.log("Invalid param.");
					})
					.catch(err => console.error(err));
			},
			setFavorites: param => {
				setStore({ favorites: param });
			}
		}
	};
};

export default getState;
