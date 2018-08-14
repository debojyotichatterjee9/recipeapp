import React from "react";

const Form = (props) => (    //stateless functional component as we do not need a state here
    <form onSubmit={props.getRecipe}>
        <input type="text" name="recipeName"/>
        <button>Search</button>
    </form>
);

export default Form;