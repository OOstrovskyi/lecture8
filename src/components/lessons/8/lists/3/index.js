import React from 'react';

function FriendsList({ friends }) {
  const listItems = friends.map((friend) => <li key={friend.age}>{friend.name}, {friend.age} years old</li>);
  return (
    <div>
      <h3>Correct Key Usage</h3>
      <ol>{listItems}</ol>
    </div>
  );
}


const friends = [
  {name: 'Peter', age: 25},
  {name: 'Sachin', age: 33},
  {name: 'Kevin', age: 37},
  {name: 'Dhoni', age: 48},
  {name: 'Alisa', age: 29},
];

const Task = () => {
  return (
    <div>
      <FriendsList friends={friends} />
    </div>
  );
};

export default Task;
