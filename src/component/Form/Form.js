import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state={
            imageurl: '',
            name: '',
            price: 0
        }
    }
    render() {
        let newProduct = this.state
        let reload = this.props.reload
        return(
            <div>
                
                <form onSubmit={(e, imageurl, name, price, reload) => this.handleSubmit(e, newProduct, reload)}>
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
            price: 0
        })
    }
    handleSubmit(e, newProduct, reload) {
        e.preventDefault();
        console.log(newProduct);
        axios.post('http://localhost:4002/api/product', newProduct)
            .then(result => {
                console.log(result.data)
                reload;
                this.setState({
                    imageurl: '',
                    name: '',
                    price: 0
                })
            })
            .catch(err => console.warn(err))
        }
}

export default Form;
