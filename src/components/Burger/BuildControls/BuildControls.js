import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const burgerControls = (props) => {
    const controls = [
        {label: 'Meat', type: 'meat'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
    ]
    return (
        <div className={classes.BuildControls}>
            <div>Total Price : <em>{props.price.toFixed(2)}</em></div>
            {controls.map(ctrl => {
                return <BuildControl 
                            key={ctrl.label} 
                            Label = {ctrl.label}
                            type = {ctrl.type}
                            added = {props.ingredientAdded}
                            removed = {props.ingredientRemoved}
                            disabled = {props.disabledInfo[ctrl.type]}
                />
            })}
            <button 
                disabled = {!props.purchaseable}
                className = {classes.OrderButton}
                onClick={props.purchasing}>ORDER NOW</button>
        </div>
    )
};

export default burgerControls;