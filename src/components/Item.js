import React from "react";
import { Link } from "react-router-dom";

const API_KEY = "e0ad43edd0855699c2c3580f80c33561";

class Item extends React.Component{
    state = {
        activeRecipe: []
    }
    componentDidMount = async() =>{
        const title = this.props.location.state.recipe;
        
        //used https://cors-anywhere.herokuapp.com/ as the data cannot be fetched from a local host server
        const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        const res = await req.json();
        //console.log(res.recipes[0]);    //logging the first matched recipe
        this.setState({ activeRecipe: res.recipes[0] });
    }
    render(){
        const recipe = this.state.activeRecipe;
        return(
            <div>
                <div className="container">
                    { 
                        this.state.activeRecipe.length !==0 &&

                        <div className="active-recipe">
                            <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title} />
                            <h3 className="active-recipe__title">{ recipe.title }</h3>
                            <h4 className="active-recipe__publisher">
                                Publisher: <span>{ recipe.publisher }</span>
                            </h4>
                            <p className="active-recipe__website">
                                Website: <span><a href={ recipe.publisher_url } target="_blank">Click to open</a></span>
                            </p>
                        <button className="active-recipe__button">
                        <Link to="/">Home</Link>
                        </button>
                    </div> 
                     }
                </div> 
            </div>
        );
    }
}

export default Item;