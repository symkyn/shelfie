import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props)

    this.state={
        inventory: []
    }

}

componentWillMount() {
    axios.get('/api/inventory')
      .then(results => {
        this.setState({
          inventory: results.data
        })
      })
      .catch(err => console.warn(err))
  }

//   updateSelection(id) {
//         this.setState({
//           selectedID: id
//         })
//         const inventoryList = this.state.inventory;
//         const listLength = this.state.inventory.length;
//         for(var index = 0; index < listLength; index++){
//           if(id == inventoryList[index].id){
//             this.setState({
//               inventoryID: index
//             })
//           }
//         }
//       }

    render() {
        const inventorySummary = this.state.inventory.map((c, i) => 
        {   
            return(<Product 
                    deleteProduct = {(id) => this.deleteProduct(id)}
                    key={`product-${i}`} 
                    product={c} />)
        })

        return (
        <div className='dashboard'>
            {inventorySummary}
        </div>
        )
    }
    
    deleteProduct(id) { 
        
        axios.delete(`/api/delete/${id}`)
            .then(() => this.props.reload())
            .catch(err => console.warn(err))
    } 

}

export default Dashboard;