import React from 'react';

const Person = (props) => {
  return (
      <div>
        <p><strong>{props.data.firstName} {props.data.lastName}</strong></p>
        <p>{props.data.title} at <em>{props.data.company}</em></p>
      </div>
    );
};

export default Person;
