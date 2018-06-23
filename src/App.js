import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state={
        // inventoryID: 0,
        // inventory: [],
        // selectedID: 0
    //   inventory: [{name: 'Brass', price: 40.45, imageURL: 'https://cf.geekdo-images.com/small/img/bY3T4SYX6lAhtfkUGJkC1laqnVw=/fit-in/200x150/pic3469216.jpg'},
    //               {name: 'Lignum', price: 30.87, imageURL: 'https://cf.geekdo-images.com/small/img/0yWec5sB_Qxpiuk8rDDWge03A4Y=/fit-in/200x150/pic2435028.jpg'}]
    // }
    }
  }

  // componentWillMount() {
  //   axios.get('http://localhost:4002/api/inventory')
  //     .then(results => {
  //       this.setState({
  //         inventory: results.data
  //       })
  //     })
  //     .catch(err => console.warn(err))
  // }

//   reload(){
//   axios.get('http://localhost:4002/api/inventory')
//       .then(results => {
//         this.setState({
//           inventory: results.data
//         })
//       })
//       .catch(err => console.warn(err))
// }
//   updateSelection(id) {
//     this.setState({
//       selectedID: id
//     })
//     const inventoryList = this.state.inventory;
//     const listLength = this.state.inventory.length;
//     for(var index = 0; index < listLength; index++){
//       if(id == inventoryList[index].id){
//         this.setState({
//           inventoryID: index
//         })
//       }
//     }
//   }
  
  render() {
    
    return (
      <div className="App">
        <Header />
        <span className='parallel-display'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/add' component={Form} />
            <Route path='/edit/:id' component={Form} />
          </Switch>
          {/* <Dashboard 
              className='dashboard-display'
              reload={() => this.reload()}
              inventory={this.state.inventory}
              updateSelection={(id) => this.updateSelection(id)} 
            />
          <Form
              className='form-display'
              reload={() => this.reload()}
              id={this.state.selectedID}
              selectedProduct={this.state.inventory[this.state.inventoryID]}
            /> */}
        </span>
      </div>
    );
  }
}

export default App;
