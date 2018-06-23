import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';


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

componentWillMount(){
   if(this.props.match.params.id){
        axios.get(`http://localhost:4002/api/edit/${this.props.match.params.id}`)
        .then(response => {
            this.setState({
                imageurl: response.data.imageurl,
                name: response.data.name,
                price: response.data.price,
                editing:true
            })
        })
    } else {
        this.setState({
            editing:false
        })
    }
}

    // componentDidUpdate(prevProps, prevState) {
    //     if(this.props.match.params.id){
    //         this.setState({
    //             imageurl: '',
    //             name: '',
    //             price: 0,
    //             editing: false
    //         })
    //     }
    // }

    render() {
        let {imageurl, name, price} = this.state;
        let newProduct = {imageurl, name, price};
       
        return(
            <div className='form'>
                { (!this.state.editing) &&
                <form onSubmit={(e, imageurl, name, price) => 
                        this.handleSubmit(e, newProduct)}>
                    <p>Image URL:</p>
                    <input 
                            value={this.state.imageurl}
                            onChange={(e) => this.handleURLChange(e)} 
                        />
                    <p>Product Name:</p>
                    <input 
                            value={this.state.name}
                            onChange={(e) => this.handlePNChange(e)} 
                        />
                    <p>Price:</p>
                    <input 
                            value={this.state.price}
                            onChange={(e) => this.handlePriceChange(e)} 
                        />
                    <br />
                    
                        <button 
                                className='form-button'
                                type='submit'>
                            Add Inventory
                        </button>
                    
                </form>
                }

                { (this.state.editing) &&
                
                <form onSubmit={(e, imageurl, name, price) => 
                        this.handleUpdate(e, newProduct)}>
                    <img className='image' src={this.state.imageurl} />
                    <p>Image URL:</p>
                    <input 
                            value={this.state.imageurl}
                            onChange={(e) => this.handleURLChange(e)} 
                        />
                    <p>Product Name:</p>
                    <input 
                            value={this.state.name}
                            onChange={(e) => this.handlePNChange(e)} 
                        />
                    <p>Price:</p>
                    <input 
                            value={this.state.price}
                            onChange={(e) => this.handlePriceChange(e)} 
                        />
                    <br />
                    <button className='form-button'>Update</button>
                </form>
                }
                <button 
                        className='form-button'
                        onClick={() => this.handleCancel()}>
                        Cancel
                </button>
                
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
    handleSubmit(e, newProduct) {
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
                this.props.history.push('/')
            })
            .catch(err => console.warn(err))
        }

        handleUpdate(e, newProduct) {
            e.preventDefault();
            console.log(newProduct);
            axios.patch(`http://localhost:4002/api/update/${this.props.match.params.id}`, newProduct)
                
                .then(result => {
                    console.log(result.data)
                    
                    this.setState({
                        imageurl: '',
                        name: '',
                        price: 0,
                        currentID: null,
                        editing: false
                    })
                    this.props.history.push('/')
                })
                .catch(err => console.warn(err))
            }
}

export default Form;
