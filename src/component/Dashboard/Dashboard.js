import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const inventorySummary = this.props.inventory.map((c, i) => (<Product key={`product-${i}`} product={c} />))

        return (
        <div>
            
            {inventorySummary}
        </div>
        )
    }

}

export default Dashboard;