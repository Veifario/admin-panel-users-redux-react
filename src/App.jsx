import "./App.css";
import Filters from "./components/Filters";
import UsersTable from "./components/UsersTable/index";

function App() {
	return (
		<div className="App">
			<Filters />
			<UsersTable />
		</div>
	);
}

export default App;
