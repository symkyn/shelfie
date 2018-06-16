import React from 'react';

function Product(props) {
    return(
        <div className='product-summary'>
            <span>
            <img src={props.product.imageurl} />
            <br />
            {props.product.name}
            {props.product.price}
            </span>
            <br />
            <button>edit</button>
            <button>delete</button>
        </div>
    )
}

export default Product;