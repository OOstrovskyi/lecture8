import React from 'react';

import './style.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    id: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    id: 1,
  },
];

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class Search extends React.Component {
  constructor(props) {
    super(props);
    const { list } = props;
    this.state = {
      list,
      searchTerm: '',
    };
  }

  onSearchChange = (event) => {
    const value = event.target.value;// your code is here
    this.setState({ searchTerm: value });
  }

  onDismiss = (id, e) => {
    //e.preventDefault();
    const itemId = id;// your code is here
    const updatedList = this.state.list.filter(item => item.id !== itemId);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="search">
        <form>
          <input
            type="text"
            onChange={this.onSearchChange}
          />
        </form>
        <ul className="items-list" >
          {this.state.list.filter(isSearched(this.state.searchTerm)).map(item => {
            const { id, url, title, author } = item;
            return (
              <li key={id} className="list-item" >
                <span>
                  <a href={url}>{title}</a> -
                  {` ${author}`}
                </span>
                <button
                  onClick={this.onDismiss.bind(null, id)}
                  type="button"
                  id={id}
                >
                  Dismiss
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const Task = () => {
  return (
    <div>
      <Search list={list} />
    </div>
  );
};

export default Task;
