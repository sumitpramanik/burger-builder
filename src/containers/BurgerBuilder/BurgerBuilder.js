import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad :0.5,
    meat:0.7,
    bacon:1.2,
    cheese:2.0
}

class BurgerBuilder extends Component {
    state = {
        ingredient:{
            'cheese':0,
            'meat':0,
            'salad':0,
            'bacon':0
        },
        totalPrice:4,
        purchaseable : false,
        purchasing: false
    }

    updatePurchaseState (ingredients) {
        let sum = Object.keys(ingredients)
        .map((igKey)=>{
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el;
        },0);

        this.setState({purchaseable : sum > 0})
    }   

    updatePurchasingStateHandler = ()=>{
        this.setState({purchasing:!this.state.purchasing})
    }

    addIngredienthandler = (type) => {
        const count = this.state.ingredient[type];
        const price = this.state.totalPrice;
        const updatedCount = count+1;
        const updatedIngredient = {...this.state.ingredient};
        updatedIngredient[type] = updatedCount;
        const updatedPrice = price + INGREDIENT_PRICES[type]
        this.setState({
            ingredient :updatedIngredient,
            totalPrice:updatedPrice
        });
        this.updatePurchaseState(updatedIngredient);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        const oldPrice = this.state.totalPrice;
        if(oldCount > 0){
            const updatedCount = oldCount - 1;
            const updatedIngredient = {...this.state.ingredient};
            updatedIngredient[type] = updatedCount;
            const updatedPrice = INGREDIENT_PRICES[type];
            const newPrice = oldPrice - updatedPrice;
            this.setState({
                ingredient:updatedIngredient,
                totalPrice:newPrice
            });
            this.updatePurchaseState(updatedIngredient);
        }
        
    }

    render() {
        let disabledInfo = {...this.state.ingredient};
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} clicked={this.updatePurchasingStateHandler}>
                    <OrderSummary ingredients={this.state.ingredient}/>
                </Modal>
                <Burger ingredient={this.state.ingredient}/>
                <BuildControls 
                    ingredientAdded= {this.addIngredienthandler} 
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabledInfo = {disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable = {this.state.purchaseable}
                    purchasing ={this.updatePurchasingStateHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder ;