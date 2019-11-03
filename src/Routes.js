import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../src/pages/Main/index.js";
import Login from "../src/pages/Login/index.js";
import SignUp from './pages/SignUp';
import RestaurantInfo from "./pages/RestautantInfo/index.js";
import foodOrder from './pages/FoodOrderPage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Login/SingUp" component={SignUp} />
          <Route exact path="/detailMenu" component={RestaurantInfo} />
          <Route exact path="/food-order" component={foodOrder} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
