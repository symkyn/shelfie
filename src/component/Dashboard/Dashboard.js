import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    render() {
        return (
        <div>
            This is the Dashboard Component
            <Product />
        </div>
        )
    }

}

export default Dashboard;