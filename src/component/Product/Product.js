import React from 'react';

function Product(props) {
    const {id} = props.product.id;
    console.log(props.product.id);
    return(
        <div className='product-summary'>
            <span>
            <img src={props.product.imageurl} />
            <br />
            {props.product.name}
            {props.product.price}
            </span>
            <br />
            <button onClick={(e) => {e.preventDefault(); props.updateSelection(props.product.id)}}>edit</button>
            <button onClick={(e) => {e.preventDefault(); props.deleteProduct(props.product.id)}}>delete</button>
        </div>
    )
}

export default Product;