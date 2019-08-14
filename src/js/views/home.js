import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Demo } from "./demo";

export class Home extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let arr = [
						store.firstNullNull,
						store.manyEmptySpaces,
						store.hasNull,
						store.notCapitalized,
						store.allLowerOrUpper,
						store.firstLastOneField,
						store.moreThanTwoOneField
					];
					console.log(arr);
					return arr.map(list =>
						list.map((e, i) => {
							return <Demo key={i} e={e} />;
						})
					);
				}}
			</Context.Consumer>
		);
	}
}
