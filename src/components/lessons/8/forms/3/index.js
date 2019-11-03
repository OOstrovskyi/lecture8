import React from 'react';

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailRef = React.createRef();
    this.agreeRef = React.createRef();

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { emailRef, agreeRef } = this;
    const email = emailRef.current.value;
    const agreeCheckbox = agreeRef.current.checked;

    if (!email) {
      alert(`entry valid email first, please`);
    }

    if (agreeCheckbox) {
      alert(`email: ${email}`);
    } else {
      alert(`agree, please`);
    }
  };

  render() {
    const { emailRef, agreeRef } = this;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" ref={emailRef} />
        <input type="checkbox" ref={agreeRef} />
      </form>
    );
  }
}

class ControlledForm extends React.Component {
  // your code is here
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      checkbox: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkboxChange = this.checkboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  checkboxChange(event) {
    this.setState({checkbox: event.target.checked})
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.text) {
      alert(`entry valid email first, please`);
    }

    if (this.state.checkbox) {
      alert(`email: ${this.state.text}`);
    } else {
      alert(`agree, please`);
    }
  }
    

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" value={this.state.text} onChange={this.handleChange} />
        <input type="checkbox" onChange={this.checkboxChange} />
      </form>
    );
  }
}

const Task = () => {
  return (
    <div>
      <UncontrolledForm/>
      <ControlledForm/>
    </div>
  );
};

export default Task;
