import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Button from '../UI/Button/Button'

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
                        .map((igKey) => {
                            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
                        })
    return (
        <Aux>
            <h3>Order Summary</h3>
            <p>A delicious burger with the following ingredients is ready:</p>
            <ul>
                {ingredients}
            </ul>
            <Button type='Success'>Success</Button>
            <Button type='Danger'>Cancel</Button>
        </Aux>
    )
}

export default orderSummary;