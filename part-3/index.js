const Person = (props) => {
  return (
    <div>
      <h2>{props.name.length < 8 ? props.name : props.name.slice(0, 8)}</h2>
      <p>
        "Learn some information about this person" <br />
        {props.age > 18 ? "please go vote!" : "you must be 18"}
      </p>
      Hobbies:
      <ul>
        {props.hobbies.map((hobby) => (
          <li> {hobby} </li>
        ))}
      </ul>
    </div>
  );
};

console.log("here in tweet?");

const App = (props) => {
  return (
    <div>
      <Person
        name="Scott Kushnier"
        age={41}
        hobbies={["water skiing", "ice fishing"]}
      />
      <hr />
      <Person name="Marc Spitz" age={32} hobbies={["chess"]} />
      <hr />
      <Person
        name="Tom Sawyer"
        age={16}
        hobbies={["swimming", "painting", "crime"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
