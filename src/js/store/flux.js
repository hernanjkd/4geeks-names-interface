const getState = ({ getStore, setStore }) => {
	return {
		store: {
			firstNullNull: [],
			manyEmptySpaces: [],
			allLowerOrUpper: [],
			firstLastOneField: [],
			moreThanTwoOneField: [],
			hasNull: [],
			notCapitalized: []
		},
		actions: {
			editStudent: (id, changes) => {
				const url = `https://api.breatheco.de/student/${id}?access_token=${process.env.ACCESS_TOKEN}`;

				fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(changes)
				}).then(() => console.log("done"));
			}
		}
	};
};

export default getState;
