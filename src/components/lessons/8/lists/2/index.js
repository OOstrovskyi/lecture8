import React from 'react';
import Index from '../../../../layout';

const friends = [
  'Mikenzi',
  'Cash',
  'Steven',
  'Kimmy',
  'Doug'
];

const List = (props) => {
  // Render a list using the "friends" being passed in.
  return (
    <ul>
      {props.friends.map((el, index) => <li key={index}>{el}</li>)}
    </ul>
  );
};

const Task = () => {
  return (
    <div>
      <List friends={friends} />
    </div>
  );
};

export default Task;
