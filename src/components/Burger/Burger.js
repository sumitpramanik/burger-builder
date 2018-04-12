import React from 'react';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import classes from './Burger.css'

const burger = (props) => {
    let transformedIngredients = null;
    transformedIngredients = Object.keys(props.ingredient)
        .map(igKey => {
            return [...Array(props.ingredient[igKey])].map((_,i)=> {
                return <BurgerIngredient key = {igKey+i} type={igKey}/>
            })

    })
    .reduce((prev,next)=> {
        return prev.concat(next);
    })

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default burger;