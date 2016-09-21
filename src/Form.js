import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.onSubmitCallback}>
      <label>First Name</label>
      <input onChange={props.onChangeCallback} name="firstName" type="text" defaultValue={props.data.firstName} />
      <label>Last Name</label>
      <input onChange={props.onChangeCallback} name="lastName" type="text" defaultValue={props.data.lastName} />
      <label>Title</label>
      <input onChange={props.onChangeCallback} name="title" type="text" defaultValue={props.data.title} />
      <label>Company</label>
      <input onChange={props.onChangeCallback} name="company" type="text" defaultValue={props.data.company} />
      <button>Submit</button>
    </form>
  );
};

export default Form;
