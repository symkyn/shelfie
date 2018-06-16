import React from 'react';

function Product(props) {
    return(
        <div>
            Product:
            <img src={props.product.imageURL} />
            {props.product.name}
            {props.product.price}
            
            
        </div>
    )
}

export default Product;