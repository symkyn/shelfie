import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()

        this.state={
            imageURL: '',
            productName: '',
            price: 0
        }
    }
    render() {
        return(
            <div>
                <form>
                    <p>Image URL:</p>
                    <input 
                            value={this.state.imageURL}
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
            imageURL: e.target.value
        })
    }
    handlePNChange(e) {
        this.setState({
            productName: e.target.value
        })
    }
    handlePriceChange(e) {
        this.setState({
            price: e.target.value
        })
    }
    handleCancel() {
        this.setState({
            imageURL: '',
            productName: '',
            price: 0
        })
    }
}

export default Form;
