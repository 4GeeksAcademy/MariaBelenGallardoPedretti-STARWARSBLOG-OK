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
		<div className="container bg-light rounded p-5" >
			<h2 style={{ fontSize: "3rem", fontFamily: "fantasy"}}>{item.name}</h2>
			{type == "people" ? (
				<>
					<h5>Año de nacimiento: {item.birth_year}</h5>
					<h5>Color de ojos: {item.eye_color}</h5>
					<h5>Genero: {item.gender}</h5>
					<h5>Color de pelo: {item.hair_color}</h5>
					<h5>Altura: {item.height}</h5>
					<h5>Peso: {item.mass}</h5>
					<h5>Color de piel: {item.skin_color}</h5>
				</>
			) : type == "planets" ? (
				<>
					<h5>Clima: {item.climate}</h5>
					<h5>Diametro: {item.diameter}</h5>
					<h5>Gravedad: {item.gravity}</h5>
					<h5>Periodo oribital: {item.orbital_period}</h5>
					<h5>Población: {item.population}</h5>
					<h5>Periodo de rotación: {item.rotation_period}</h5>
					<h5>Superficie de agua: {item.surface_water}</h5>
					<h5>Terreno: {item.terrain}</h5>
				</>
			) : type == "vehicles" ? (
				<>
					<h5>Modelo: {item.model}</h5>
					<h5>Capacidad: {item.cargo_capacity}</h5>
					<h5>Consumibles: {item.consumables}</h5>
					<h5>Tripuación: {item.crew}</h5>
					<h5>Largo: {item.length}</h5>
					<h5>Fabricante: {item.manufacturer}</h5>
					<h5>Velocidad máxima: {item.max_atmosphering_speed}</h5>
					<h5>Pasajeros: {item.passengers}</h5>
					<h5>Clase de vehículo: {item.vehicle_class}</h5>
				</>
			) : (
				console.log("Invalid url. At (information.js).")
			)}
		</div>
	);
};
