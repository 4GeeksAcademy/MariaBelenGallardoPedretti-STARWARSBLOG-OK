import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Information = () => {
	const { store, actions } = useContext(Context);
	const { type, index } = useParams();
	let item;

	type == "people"
		? (item = store.people[index])
		: type == "planets"
			? (item = store.planets[index])
			: type == "vehicles"
				? (item = store.vehicles[index])
				: console.log("Invalid url. At (information.js).");

	return (
		<div className="container bg-light rounded p-5">
			<h2 style={{ fontSize: "3rem" }}>{item.name}</h2>
			{type == "people" ? (
				<>
					<h5>Birth Year: {item.birth_year}</h5>
					<h5>Eye Color: {item.eye_color}</h5>
					<h5>Gender: {item.gender}</h5>
					<h5>Hair Color: {item.hair_color}</h5>
					<h5>Height: {item.height}</h5>
					<h5>Mass: {item.mass}</h5>
					<h5>Skin Color: {item.skin_color}</h5>
				</>
			) : type == "planets" ? (
				<>
					<h5>Climate: {item.climate}</h5>
					<h5>Diameter: {item.diameter}</h5>
					<h5>Gravity: {item.gravity}</h5>
					<h5>Orbital Period: {item.orbital_period}</h5>
					<h5>Population: {item.population}</h5>
					<h5>Rotation Period: {item.rotation_period}</h5>
					<h5>Surface Water: {item.surface_water}</h5>
					<h5>Terrain: {item.terrain}</h5>
				</>
			) : type == "vehicles" ? (
				<>
					<h5>Model: {item.model}</h5>
					<h5>Cargo Capacity: {item.cargo_capacity}</h5>
					<h5>Consumables: {item.consumables}</h5>
					<h5>Crew: {item.crew}</h5>
					<h5>Length: {item.length}</h5>
					<h5>Manufacturer: {item.manufacturer}</h5>
					<h5>Maximum Atmospheric Speed: {item.max_atmosphering_speed}</h5>
					<h5>Passengers: {item.passengers}</h5>
					<h5>Vehicle Class: {item.vehicle_class}</h5>
				</>
			) : (
				console.log("Invalid url. At (information.js).")
			)}
		</div>
	);
};
