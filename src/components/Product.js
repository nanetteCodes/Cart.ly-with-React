import React, {Component} from 'react';
import Counter from './Counter';

class Product extends Component{
	constructor(props){
		super(props);
        this.state = {
            selectedProduct: {},
            quickViewProdcut: {},
            buttonLabel: "ADD TO CART",
        }
    }
    resetQuantity(){

    }
    addToCart(filename, name, price, id, quantity){
        this.setState({
            selectedProduct: {
                filename: filename,
                name: name,
                price: price,
                id: id,
                quantity: quantity
            }
        }, function(){
            this.props.addToCart(this.state.selectedProduct);
        })
        this.setState({
            buttonLabel: "✔ ADDED"
        }, function(){
            setTimeout(() => {
                this.setState({
                    buttonLabel: "ADD TO CART",
                    selectedProduct: {}
                });
            }, 5000);
        });
    }
    quickView(filename, name, price, id){
        this.setState({
            quickViewProdcut: {
                filename: filename,
                name: name,
                price: price,
                id: id
            }
        }, function(){
            this.props.openModal(this.state.quickViewProdcut);
        })
    }
    render(){
        let filename = this.props.filename;
        let name = this.props.name;
        let price = this.props.price;
        let id = this.props.id;
        let quantity = this.props.productQuantity;
        return(
            <div className="product">
                <div className="product-image">
                    <img src={filename} alt={this.props.name} onClick={this.quickView.bind(this, filename, name, price, id, quantity)}/>
                </div>
                <h4 className="product-name">{this.props.name}</h4>
                <p className="product-price">{this.props.price}</p>
                <Counter productQuantity={quantity} updateQuantity={this.props.updateQuantity} resetQuantity={this.resetQuantity}/>
                <div className="product-action">
                    <button type="button" onClick={this.addToCart.bind(this, filename, name, price, id, quantity)}>{this.state.buttonLabel}</button>
                </div>
            </div>
        )
    }
}

export default Product;
