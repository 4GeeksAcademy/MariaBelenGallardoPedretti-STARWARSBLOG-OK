import React, { useState, useEffect } from "react";
import getState from "./flux.js";


export const Context = React.createContext(null);


const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			// llamada a la api para poder guardar la información de acuerdo a cada variable
			state.actions.fetchData("planets");
			state.actions.fetchData("people");
			state.actions.fetchData("vehicles");
		}, []);

		
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
