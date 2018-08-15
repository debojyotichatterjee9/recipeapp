import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App.js";
import Item from "./Item.js";

const Router = () =>(
  <BrowserRouter>
   <Switch>
    <Route path="/" component={App} exact/> {/*noly render out this component when the path is exactly as mentioned*/}
    <Route path="/recipe/:id" component={Item}/>
   </Switch>
  </BrowserRouter>
);

export default Router;