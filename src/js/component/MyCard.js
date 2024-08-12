import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/home.css";

export const MyCard = props => {
	const { store, actions } = useContext(Context);
	const [favorites, setFavorites] = useState(store.favorites);

	const addFavorite = () => {
		let newFavorite;
		props.type == "people"
			? (newFavorite = store.people.filter(item => item.name == props.name))
			: props.type == "planets"
				? (newFavorite = store.planets.filter(item => item.name == props.name))
				: props.type == "vehicles"
					? (newFavorite = store.vehicles.filter(item => item.name == props.name))
					: console.log("Item invalid. At MyCard.js");

		newFavorite = newFavorite[0];

		const existingIndex = favorites.findIndex(item => item.name === newFavorite.name);

		let newArray = favorites;

		if (existingIndex !== -1) {
			// Si ya existe, eliminarlo
			newArray.splice(existingIndex, 1);
		} else {
			// Si no existe, agregarlo
			newArray.push(newFavorite);
		}

		setFavorites(newArray);
		actions.setFavorites(favorites);
		console.log(store.favorites);
	};

	return (
		<Card className="m-4" style={{ minWidth: "18rem", maxWidth: "18rem", minHeight: "22rem", background: "#C8C8C8"}}>
			<Card.Body className="">
				<Card.Title className="b-text" style={{ whiteSpace: "initial", fontSize: "2rem", fontFamily: "fantasy"}}>
					{props.name}
				</Card.Title>
				{props.type == "people" ? (
					<div className="text-left">
						<Card.Text className="h-auto col-12 my-3" style={{ whiteSpace: "initial" }}>
							<b>Genero:</b> {props.gender}
						</Card.Text>
						<Card.Text className="h-auto col-12 my-3" style={{ whiteSpace: "initial" }}>
							<b>Altura:</b> {props.height}
						</Card.Text>
						<Card.Text className="h-auto col-12 my-3" style={{ whiteSpace: "initial" }}>
							<b>Color de pelo:</b> {props.hair_color}
						</Card.Text>
					</div>
				) : props.type == "planets" ? (
					<div className="text-left">
						<Card.Text className="h-auto col-12 my-3" style={{ whiteSpace: "initial" }}>
							<b>Población:</b> {props.population}
						</Card.Text>
						<Card.Text className="h-auto col-12 my-3" style={{ whiteSpace: "initial" }}>
							<b>Terreno</b>: {props.terrain}
						</Card.Text>
						<Card.Text className="h-auto col-12 my-3" style={{ whiteSpace: "initial" }}>
							<b>Clima:</b> {props.climate}
						</Card.Text>
					</div>
				) : props.type == "vehicles" ? (
					<div className="text-left">
						<Card.Text className="h-auto col-12 my-3" style={{ whiteSpace: "initial" }}>
							<b>Modelo:</b> {props.model}
						</Card.Text>
						<Card.Text className="h-auto col-12 my-3" style={{ whiteSpace: "initial" }}>
							<b>Pasajeros:</b> {props.passenger}
						</Card.Text>
						<Card.Text className="h-auto col-12 my-3" style={{ whiteSpace: "initial" }}>
							<b>Fabricante:</b> {props.manufacturer}
						</Card.Text>
					</div>
				) : (
					console.log("Invalid type (At MyCard.js).")
				)}
				<Link to={`/information/${props.type}/${props.index}`}>
					<Button
						variant="primary"
						className="bg-dark text-light border-dark mx-auto"
						style={{ position: "absolute", bottom: "1rem", left: "3.5rem" }}>
						Más Información
					</Button>
				</Link>
				<i
					className="fas fa-star bg-dark text-light rounded p-2"
					style={{
						fontSize: "1.3rem",
						position: "absolute",
						bottom: "1.1rem",
						right: "2rem",
						cursor: "pointer"
						}}
					onClick={() => addFavorite()}
				/>
			</Card.Body>
		</Card>
	);
};

MyCard.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string,
	gender: PropTypes.string,
	height: PropTypes.string,
	hair_color: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string,
	climate: PropTypes.string,
	model: PropTypes.string,
	passenger: PropTypes.string,
	manufacturer: PropTypes.string,
	index: PropTypes.number,
	url: PropTypes.string
};
