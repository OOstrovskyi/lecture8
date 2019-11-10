import React from 'react';
import PropTypes from 'prop-types';

const buttons = [
  'first',
  'nano',
  'bob',
  'tomato',
];

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeButtonName: '',
      activeButtonId: 0,
    }
  }
  
  //здесь мы устанавливаем состояния
  clickHandler = (name, index) => {
    this.setState({activeButtonName: name});
    this.setState({activeButtonId: index});
  }

  render() {
    const {activeButtonName, activeButtonId } = this.state;
    return (
      <div>
        {buttons.map((i, index) => 
          (<Button clickHandler={this.clickHandler.bind(this, i, index)} key={index} name={i} active={index===activeButtonId ? true : false} />))
        }
        <Details name={activeButtonName}/>
      </div>
    );
  }
}

class Button extends React.Component {

  render() {
    const { clickHandler, name, active } = this.props;
    
    return (
      <button
        onClick={clickHandler}
        style={{color: active ? 'red': 'blue'}}
      >
        {name}
      </button>
    );
  }
}

function Details({ name }) {
  return <div>{name}</div>;
}

const Task = () => {
  return <Index/>;
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
}

export default Task;
