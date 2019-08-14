import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Demo extends React.Component {
	constructor() {
		super();
		this.state = {
			first_name: "",
			last_name: ""
		};
	}
	render() {
		let e = this.props.e;
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					console.log(this.state);
					return (
						<div className="text-center mt-5">
							<div>email: {e.email || e.username}</div>
							<div>
								first name:
								<input
									onChange={e => this.setState({ first_name: e.target.value })}
									type="text"
									defaultValue={e.first_name}
								/>
							</div>
							<div>
								last name:{" "}
								<input
									onChange={e => this.setState({ last_name: e.target.value })}
									type="text"
									defaultValue={e.last_name}
								/>
							</div>
							<button
								onClick={() =>
									actions.editStudent(e.id, {
										first_name: this.state.first_name,
										last_name: this.state.last_name
									})
								}>
								SAVE
							</button>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Demo.propTypes = {
	e: PropTypes.object
};
