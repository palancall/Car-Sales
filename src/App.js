import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
// import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

const App = (props) => {
  return (
    <div>
      <div className="navbar">
        <NavBar />
      </div>
      <Switch>
        <div className="boxes">
          <div className="box">
            <Header car={props.state.car} />
            <AddedFeatures car={props.state.car} />
          </div>
          <div className="box">
            <AdditionalFeatures
              additionalFeatures={props.state.additionalFeatures}
            />
            <Total
              car={props.state.car}
              additionalPrice={props.state.car.features.reduce(
                (acc, feature) => {
                  return acc + feature.price;
                },
                props.state.additionalPrice
              )}
            />
          </div>
        </div>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log("LT: App.js: mapStateToProps: state", state);
  return {
    state: state,
  };
};
export default connect(mapStateToProps, {})(App);

// export default App;
