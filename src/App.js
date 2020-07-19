import React, { Component } from "react";
import "./App.css";
import USAMap from "react-usa-map";

// import PostSorting from './posts/PostSorting'
// import ImgDropAndCrop from './learn/ImgDropAndCrop'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  // MAP STUFF
  mapHandler = (event) => {
    alert(event.target.dataset.name);
    console.log(event);
  };

  // with the clickHandler, you can change the text that pops up in the alert
  statesFilling = () => {
    return {
      NJ: {
        fill: "navy",
        clickHandler: () => alert("New Jersey"),
      },
      FL: {
        fill: "#CC0000",
      },
    };
  };

// API CALL FOR FLORIDA TESTING CENTERS
  componentDidMount() {
    const apiUrl =
      "https://covid-19-testing.github.io/locations/florida/complete.json";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log("florida testing centers", data));

// USER LOCATION IN CONSOLE
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  render() {
    return (
      <div className="App">
        {/* <PostSorting /> */}
        {/* <ImgDropAndCrop /> */}

        <h1>component mounted</h1>
        <h3>states in the console:</h3>
        <h5>Florida</h5>
        <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
      </div>
    );
  }
}

export default App;
