import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

import { MyCarousel } from "../component/MyCarousel";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center m-5">
			<MyCarousel type="planets" />
			<MyCarousel type="people" />
			<MyCarousel type="vehicles" />
		</div>
	);
};
