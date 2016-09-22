import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.onSubmitCallback} onChange={props.onChangeCallback}>
      <label>First Name</label>
      <input name="firstName" type="text" defaultValue={props.data.firstName} />
      <label>Last Name</label>
      <input name="lastName" type="text" defaultValue={props.data.lastName} />
      <label>Title</label>
      <input name="title" type="text" defaultValue={props.data.title} />
      <label>Company</label>
      <input name="company" type="text" defaultValue={props.data.company} />
      <button>Submit</button>
    </form>
  );
};

export default Form;
