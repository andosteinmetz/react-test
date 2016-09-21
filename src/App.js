import React, { Component } from 'react';
import Person from './Person';
import Form from './Form';

var update = require('react-addons-update');

const state = {
  editing: false,
  customer: {
    firstName: 'John',
    lastName: 'Irwin',
    company: 'Artforum',
    title: 'Founder'
  },
  newCustomer: {
    firstName: '',
    lastName: '',
    company: 'Artforum',
    title: ''
  }
};

class App extends Component {
  constructor(props){
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = state;
  }

  toggleForm(e){
    e.preventDefault();
    this.setState((state) => {
      return state.editing = !state.editing;
    });
  }

  handleChange(e){
    let propName = e.target.name;
    let propValue = e.target.value;
    let replacer = {};
    replacer[propName] = propValue;
    let newCustomer = Object.assign({}, state.newCustomer, replacer);
    let newState = update( this.state, {newCustomer: {$set: newCustomer}} );
    console.log(newState);
    this.setState(newState);
    //this.setState({ newCustomer: newCustomer }); // W T F ????
    console.log(state.newCustomer);
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState((state)=> {
      return state.editing = !state.editing;
    })
  }

  render() {
    const person = (
      <Person data={this.state.customer} />
    );

    const form = (
      <Form 
        data={this.state.customer} 
        onChangeCallback={this.handleChange} 
        onSubmitCallback={this.handleSubmit} 
      />
    );

    return (
      <div className="App">
        <div className="App-body">
          {this.state.editing ? form : person}
         </div>
         <button onClick={this.toggleForm}>
           {this.state.editing ? 'Cancel' : 'Edit'}
         </button>
      </div>
    );
  }
}

export default App;
