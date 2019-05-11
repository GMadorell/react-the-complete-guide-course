import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import classes from "./Burger.module.css";

const burger = props => {
  const burgerIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return (
          <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        );
      });
    })
    .flat();

  const burgerBody =
    burgerIngredients.length === 0 ? (
      <p>Please start adding ingredients</p>
    ) : (
      burgerIngredients
    );

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {burgerBody}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
