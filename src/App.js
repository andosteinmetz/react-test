import React, { Component } from 'react';
import Person from './Person';
import Form from './Form';

const state = {
  editing: false,
  customer: {
    firstName: 'John',
    lastName: 'Irwin',
    company: 'Artforum',
    title: 'Founder'
  }
};

class App extends Component {
  constructor(props){
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = state;
    this.state.newCustomer = Object.assign({}, this.state.customer);
  }

  toggleForm(e){
    e.preventDefault();
    this.setState((state) => {
      return {editing: !state.editing, newCustomer: state.customer}
    });
  }

  handleChange(e){
    let propName = e.target.name;
    let propValue = e.target.value;
    let updatedCustomer = Object.assign({}, this.state.newCustomer);
    updatedCustomer[propName] = propValue;

    this.setState({newCustomer: updatedCustomer});
  }

  handleSubmit(e){
    e.preventDefault();
    let newCustomer = Object.assign({}, this.state.newCustomer);
    this.setState({customer: newCustomer});
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
