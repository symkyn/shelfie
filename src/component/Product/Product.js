import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

function Product(props) {
    // const {id} = props.product.id;
    
    return(
        <div className='product-summary'>
            <span>
            <img src={props.product.imageurl} />
            <br />
            {props.product.name}
            <br />
            {props.product.price}
            </span>
            <br />
            <Link to={`/edit/${props.product.id}`}><button className='product-button'>edit</button></Link>
            <button 
                className='product-button'
                onClick={(e) => 
                    {e.preventDefault(); props.deleteProduct(props.product.id)}}>delete</button>
        </div>
    )
}

export default Product;