import React, { Component } from "react";
import "./App.css";

// import PostSorting from './posts/PostSorting'
// import ImgDropAndCrop from './learn/ImgDropAndCrop'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    const apiUrl =
      "https://covid-19-testing.github.io/locations/florida/complete.json";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log("DATA", data));
  }

  render() {
    return (
      <div className="App">
        {/* <PostSorting /> */}
        {/* <ImgDropAndCrop /> */}

        <h1>component mounted</h1>
        <h3>states in the console:</h3>
        <h5>Florida</h5>
      </div>
    );
  }
}

export default App;
