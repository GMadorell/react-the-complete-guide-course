import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 2,
  cheese: 3,
  meat: 1.3
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  addIngredientHandler = type => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = this.state.ingredients[type] + 1;

    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({
      ingredients: newIngredients,
      totalPrice: newPrice
    });
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const newState = { ...this.state };
    newState[type] = oldCount - 1;
    this.setState(newState);
  };

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler} />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
