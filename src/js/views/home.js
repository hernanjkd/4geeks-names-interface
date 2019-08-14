import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			first_name: "",
			last_name: ""
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<h2>First name null</h2>
							{store.firstNullNull.map((e, i) => {
								return (
									<div key={i} className="text-center mt-5">
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
									</div>
								);
							})}
							<h2>Many empty spaces</h2>
							{store.manyEmptySpaces.map((e, i) => {
								return (
									<div key={i} className="text-center mt-5">
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
									</div>
								);
							})}
							<h2>All lower or upper case</h2>
							{store.allLowerOrUpper.map((e, i) => {
								return (
									<div key={i} className="text-center mt-5">
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
									</div>
								);
							})}
							<h2>First and Last name in one field</h2>
							{store.firstLastOneField.map((e, i) => {
								return (
									<div key={i} className="text-center mt-5">
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
									</div>
								);
							})}
							<h2>One field, more than one name</h2>
							{store.moreThanTwoOneField.map((e, i) => {
								return (
									<div key={i} className="text-center mt-5">
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
									</div>
								);
							})}
							<h2>Has null</h2>
							{store.hasNull.map((e, i) => {
								return (
									<div key={i} className="text-center mt-5">
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
									</div>
								);
							})}
							<h2>Not Capitalized</h2>
							{store.notCapitalized.map((e, i) => {
								return (
									<div key={i} className="text-center mt-5">
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
									</div>
								);
							})}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
