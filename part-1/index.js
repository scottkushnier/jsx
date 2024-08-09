const FirstComponent = () => {
  return <h1> My Very First Component </h1>;
};

const NamedComponent = (props) => {
  return <p> My name is {props.name} </p>;
};

// ReactDOM.render(<FirstComponent />, document.getElementById("root"));

// ReactDOM.render(<NamedComponent name="Jim"/>, document.getElementById("root"));

const App = (props) => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Sam" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
