import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { MyCard } from "../component/MyCard";

export const ItemsList = () => {
	const { store, actions } = useContext(Context);
	const { type } = useParams();
	const [valid, setValid] = useState(false);

	setInterval(() => {
		store.planets.length > 8 && store.people.length > 8 && store.vehicles.length > 8
			? setValid(true)
			: setValid(false);
	}, 2000);

	return (
		<div className="text-center mt-5 mx-auto d-flex flex-wrap" style={{ width: "80%" }}>
			{valid == true
				? type == "people"
					? store.people.map((item, index) => {
							return (
								<MyCard
									name={item.name}
									type={type}
									gender={item.gender}
									height={item.height}
									hair_color={item.hair_color}
									index={index}
									key={index}
									url={item.url}
								/>
							);
					  })
					: type == "planets"
						? store.planets.map((item, index) => {
								return (
									<MyCard
										name={item.name}
										type={type}
										population={item.population}
										terrain={item.terrain}
										climate={item.climate}
										index={index}
										key={index}
										url={item.url}
									/>
								);
						  })
						: type == "vehicles"
							? store.vehicles.map((item, index) => {
									return (
										<MyCard
											name={item.name}
											type={type}
											model={item.model}
											passenger={item.passengers}
											manufacturer={item.manufacturer}
											index={index}
											key={index}
											url={item.url}
										/>
									);
							  })
							: type == "favorites"
								? store.favorites.map((item, index) => {
										let url = item.url.split("/");
										url = url[url.length - 2];
										console.log(item);
										return url == "people" ? (
											<MyCard
												name={item.name}
												type={url}
												gender={item.gender}
												height={item.height}
												hair_color={item.hair_color}
												index={index}
												key={index}
												url={item.url}
											/>
										) : url == "planets" ? (
											<MyCard
												name={item.name}
												type={url}
												population={item.population}
												terrain={item.terrain}
												climate={item.climate}
												index={index}
												key={index}
												url={item.url}
											/>
										) : url == "vehicles" ? (
											<MyCard
												name={item.name}
												type={url}
												model={item.model}
												passenger={item.passengers}
												manufacturer={item.manufacturer}
												index={index}
												key={index}
												url={item.url}
											/>
										) : (
											console.log("Invalid url. At ItemsList.js")
										);
								  })
								: ""
				: console.log("Fetch is Loading.")}
		</div>
	);
};
