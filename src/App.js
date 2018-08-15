import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form.js";
import Recipes from "./components/Recipes.js";

const API_KEY = "e0ad43edd0855699c2c3580f80c33561";


class App extends Component {
  state = {
    recipes: [] //setting the state to an empty array
  }
  getRecipe = async (e) =>{    //method responsible for making the API call
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault(); //this prevents the page to be refreshed on click
    //used https://cors-anywhere.herokuapp.com/ as the data cannot be fetched from a local host server
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
    const data = await api_call.json();
    this.setState({ recipes: data.recipes }); //setting the state after click
    console.log(this.state.recipes);
    //console.log(data.recipes[0].publisher);
    //console.log(recipeName);
  }

  componentDidUpdate = () =>{
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
