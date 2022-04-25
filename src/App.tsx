import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

import { getData } from "./utils/data.utils";

export type Beast = {
	id: string;
	name: string;
	email: string;
	company: any;
};

const App = () => {
	// useState encapsulate local state in funnctional component
	// when state value is changed function component is re-rendered
	const [searchField, setSearchField] = useState("");
	const [beasts, setBeasts] = useState<Beast[]>([]);
	const [filteredBeasts, setFilteredBeasts] = useState(beasts);

	useEffect(() => {
		const fetchUsers = async () => {
			const users = await getData<Beast[]>(
				"https://jsonplaceholder.typicode.com/users"
			);
			setBeasts(users);
		};
		fetchUsers();
	}, []);

	useEffect(() => {
		const filteredBeasts = beasts.filter((beast) =>
			beast.name.toLocaleLowerCase().includes(searchField)
		);
		setFilteredBeasts(filteredBeasts);
	}, [beasts, searchField]);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
		const searchFieldString = e.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className="App">
			<h1 className="app-title">Beasts Selection</h1>

			<SearchBox
				className="search-box"
				handlerChange={handleSearch}
				placeholder="find your beast"
			/>
			<CardList beasts={filteredBeasts} />
		</div>
	);
};

export default App;

// class App extends Component {
// 	//* initialize the state here, always runs first
// 	constructor() {
// 		super();
// 		this.state = {
// 			beasts: [],
// 			searchField: "",
// 		};
// 	}

// 	//* runs third
// 	componentDidMount() {
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((response) => response.json())
// 			// setState(() => {}, () => {})
// 			.then((users) =>
// 				this.setState(() => {
// 					return { beasts: users };
// 				})
// 			);
// 	}

// the object property is the same, even thouth the value is different,
// so React didn't update the name, different reference in the memory
//* React need a completely different Object in memory in order to update UI
//! Shallow merge loook for any key that exists in current State {}, and update to the new value, change only keys tha are passed
// When update using same type of values
//TODO setState() happens asynchronously
// Components re-render based on two conditions:
//* when setState being called
//* when props are updated
// React tree like structure - go top to bottom - parent to child
// App.js is entry point to whole app, only one

// 	handleSearch = (e) => {
// 		const searchField = e.target.value.toLocaleLowerCase();
// 		this.setState(() => {
// 			return { searchField };
// 		});
// 	};

// 	//* runs second, determine what to show, the IU
// 	render() {
// 		const { beasts, searchField } = this.state;
// 		const filteredBeasts = beasts.filter((beast) =>
// 			beast.name.toLocaleLowerCase().includes(searchField)
// 		);
// 		return (
// 			<div className="App">
// 				<h1 className="app-title">Beasts Selection</h1>
// 				<SearchBox
// 					className="search-box"
// 					handlerChange={this.handleSearch}
// 					placeholder="find your beast"
// 				/>
// 				<CardList beasts={filteredBeasts} />
// 			</div>
// 		);
// 	}
// }
