import React, { Component } from 'react';

function sendEmail(name, mail, message) {
  const params = {name, mail, message};
  let alertText = 'Email sending request in process.\nEmail params:\n';
  alertText += Object.keys(params).map(i => `${i}: ${params[i]}`).join('\n');
  alert(alertText);
}

class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameRef = React.createRef();
    this.mailRef = React.createRef();
    this.messageRef = React.createRef();
  }

  handleSubmit = () => {
    // change code below this line

    sendEmail(this.nameRef.current.value, this.mailRef.current.value, this.messageRef.current.value);
    // change code above this line
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" ref={this.nameRef} />
        </div>
        <div>
          <label htmlFor="mail">E-mail:</label>
          <input type="email" id="mail" name="user_mail" ref={this.mailRef} />
        </div>
        <div>
          <label htmlFor="msg">Message:</label>
          <textarea id="msg" name="user_message" ref={this.messageRef}></textarea>
        </div>
        <button type='submit'>Submit!</button>
      </form>
    );
  }
}

const Task = () => {
  return (
    <div>
      <UncontrolledForm/>
    </div>
  );
};

export default Task;
