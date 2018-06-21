import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const inventorySummary = this.props.inventory.map((c, i) => 
            (<Product 
                    deleteProduct = {(id) => {this.deleteProduct(id)}}
                    updateSelection={(id) => {this.props.updateSelection(id)}}
                    key={`product-${i}`} 
                    product={c} />))

        return (
        <div>
            
            {inventorySummary}
        </div>
        )
    }
    
    deleteProduct(id) { 
        
        axios.delete(`http://localhost:4002/api/delete/${id}`)
            .then(() => this.props.reload())
            .catch(err => console.warn(err))
    } 

}

export default Dashboard;