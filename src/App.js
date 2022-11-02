import "./App.css";
import user from "./info.json";

function App() {
	return (
		<div className="App">
			<div
				style={{
					width: "1100px",
					margin: "0 auto",
					fontSize: 35,
					backgroundColor: "#1FCD70",
				}}
				className="wrapper"
			>
				<h1>About me!</h1>
				<div>Name: {user.name}</div>
				<div>Surname: {user.surname}</div>
				<div>{user.summary}</div>
				<div>
					{`I worked on position ${Object.keys(user.experience)[0]}
				${user.experience["Sales Manager"]} years`}
				</div>
				{`I like active and contact sports so my hobbies are: ${user.hobbies.join(
					", "
				)}`}
			</div>
		</div>
	);
}

export default App;
