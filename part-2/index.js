const Tweet = (props) => {
  return (
    <div class="Tweet">
      <p>
        {" "}
        TWEET <br />
        Username: {props.username} <br />
        Name: {props.name} <br />
        Date: {props.date} <br />
        Message: <span class="Tweet-Message"> {props.message} </span>
      </p>
    </div>
  );
};

console.log("here in tweet?");

const App = (props) => {
  return (
    <div>
      <Tweet
        username="kushnier"
        name="Scott Kushnier"
        date="8-8-24"
        message="Hi!"
      />
      <hr />
      <Tweet
        username="mark"
        name="Marc Spitz"
        date="8-8-21"
        message="Bubbles.."
      />
      <hr />
      <Tweet
        username="tom"
        name="Tom Sawyer"
        date="8-1-23"
        message="Hey Huck"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
