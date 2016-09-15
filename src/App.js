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
    this.state = state;
  }

  toggleForm(e){
    e.preventDefault();
    this.setState((state) => {
      return state.editing = !state.editing;
    });
  }

  handleChange(){}

  handleSubmit(){}

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
