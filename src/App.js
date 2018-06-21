import React, { Component } from 'react';
import axios from 'axios'

import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state={
        inventory: [],
        selectedID: 0
    //   inventory: [{name: 'Brass', price: 40.45, imageURL: 'https://cf.geekdo-images.com/small/img/bY3T4SYX6lAhtfkUGJkC1laqnVw=/fit-in/200x150/pic3469216.jpg'},
    //               {name: 'Lignum', price: 30.87, imageURL: 'https://cf.geekdo-images.com/small/img/0yWec5sB_Qxpiuk8rDDWge03A4Y=/fit-in/200x150/pic2435028.jpg'}]
    // }
    }
  }

  componentWillMount() {
    axios.get('http://localhost:4002/api/inventory')
      .then(results => {
        this.setState({
          inventory: results.data
        })
      })
      .catch(err => console.warn(err))
  }

  reload(){
  axios.get('http://localhost:4002/api/inventory')
      .then(results => {
        this.setState({
          inventory: results.data
        })
      })
      .catch(err => console.warn(err))
}
  updateSelection(id) {
    console.log(id);
    this.setState({
      selectedID: id
    })
  }
  
  render() {
    
    return (
      <div className="App">
        <Header />
        <span className='parallel-display'>
          <Dashboard 
              className='dashboard-display'
              inventory={this.state.inventory}
              updateSelection={(id) => this.updateSelection(id)} 
            />
          <Form
              className='form-display'
              reload={() => this.reload()}
              id={this.state.selectedID}
              selectedProduct={this.state.inventory[this.state.selectedID]}
            />
        </span>
      </div>
    );
  }
}

export default App;
