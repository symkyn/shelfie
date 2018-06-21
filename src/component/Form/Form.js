import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state={
            imageurl: '',
            name: '',
            price: 0,
            currentID: null,
            editing: false
        }
    }

    componentDidUpdate(prevState) {
        if(prevState.currentID != this.props.currentID){
            this.setState({
                imageurl: this.props.selectedProduct.imageurl,
                name: this.props.selectedProduct.name,
                price: this.props.selectedProduct.price,
                editing: true
            })
        }
    }

    render() {
        let {imageurl, name, price} = this.state;
        let newProduct = {imageurl, name, price};
       
        return(
            <div>
                { (!this.state.editing) &&
                <form onSubmit={(e, imageurl, name, price, componentRemount) => 
                        this.handleSubmit(e, newProduct, this.props.reload())}>
                    <p>Image URL:</p>
                    <input 
                            value={this.state.imageurl}
                            onChange={(e) => this.handleURLChange(e)} 
                        />
                    <p>Product Name:</p>
                    <input 
                            value={this.state.productName}
                            onChange={(e) => this.handlePNChange(e)} 
                        />
                    <p>Price:</p>
                    <input 
                            value={this.state.price}
                            onChange={(e) => this.handlePriceChange(e)} 
                        />
                    <br />
                    <button>Add Inventory</button>
                </form>
                }
                { (this.state.editing) &&
                <form onSubmit={(e, imageurl, name, price, componentRemount) => 
                        this.handleUpdate(e, newProduct, this.props.componentRemount())}>
                    <p>Image URL:</p>
                    <input 
                            value={this.state.imageurl}
                            onChange={(e) => this.handleURLChange(e)} 
                        />
                    <p>Product Name:</p>
                    <input 
                            value={this.state.productName}
                            onChange={(e) => this.handlePNChange(e)} 
                        />
                    <p>Price:</p>
                    <input 
                            value={this.state.price}
                            onChange={(e) => this.handlePriceChange(e)} 
                        />
                    <br />
                    <button>Update</button>
                </form>
                }
                <button onClick={() => this.handleCancel()}>Cancel</button>
            </div>
        )
    }

    handleURLChange(e) {
        this.setState({
            imageurl: e.target.value
        })
    }
    handlePNChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    handlePriceChange(e) {
        this.setState({
            price: e.target.value
        })
    }
    handleCancel() {
        this.setState({
            imageurl: '',
            name: '',
            price: 0,
            editing: false
        })
    }
    handleSubmit(e, newProduct, reload) {
        e.preventDefault();
        console.log(newProduct);
        axios.post('http://localhost:4002/api/product', newProduct)
            .then(result => {
                console.log(result.data)
                
                this.setState({
                    imageurl: '',
                    name: '',
                    price: 0
                })
                this.props.reload();
            })
            .catch(err => console.warn(err))
        }

        handleUpdate(e, newProduct, reload) {
            e.preventDefault();
            console.log(newProduct);
            axios.patch('http://localhost:4002/api/update/:id', newProduct)
                
                .then(result => {
                    console.log(result.data)
                    
                    this.setState({
                        imageurl: '',
                        name: '',
                        price: 0,
                        currentID: null,
                        editing: false
                    })
                    this.props.reload();
                })
                .catch(err => console.warn(err))
            }
}

export default Form;
