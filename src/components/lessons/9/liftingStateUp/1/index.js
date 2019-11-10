import React from 'react';
import PropTypes from 'prop-types';

class VoteComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      votesNumber: 0,
    };
  }

  style = {
    padding: '8px',
    marginTop: '16px',
    border: 'solid 1px grey',
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.votesNumber !== prevState.votesNumber) {
      this.props.onVote(this.state.votesNumber);
    }
  }


  render() {
    console.log('VoteComponent render');
    const { resolution, increase, decrease, terminalNumber } = this.props;
    return (
      <div style={this.style} >
        <h6>Terminal number: {terminalNumber}</h6>
        <h3>Resolution: "{resolution}"</h3>
        <button onClick={decrease}>No</button>
        <button onClick={increase}>Yes</button>
      </div>
    );
  }
}

const VotingDisplay = ({ resolution, result }) => {
  return (
    <React.Fragment>
      <h1>Resolution: {resolution}</h1>
      <h2>Result: {result}</h2>
    </React.Fragment>
  );
}

class VotingSystem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      votesNumber: 0,
    };
  }

  onVote = (votesNumber) => {
    this.setState({votesNumber});
  }

  increase = () => {
    this.setState(({ votesNumber }) => ({votesNumber: votesNumber + 1}));
  }

  decrease = () => {
    this.setState(({ votesNumber }) => ({votesNumber: votesNumber - 1}));
  }

  render() {
    const { resolution } = this.props;
    const { votesNumber } = this.state;
    return (
      <React.Fragment>
        <VotingDisplay resolution={resolution} result={votesNumber} />
        <VoteComponent resolution={resolution} increase={this.increase.bind(this)} decrease={this.decrease.bind(this)} onVote={this.onVote} terminalNumber={1} />
        <VoteComponent resolution={resolution} increase={this.increase.bind(this)} decrease={this.decrease.bind(this)} onVote={this.onVote} terminalNumber={2} />
        <VoteComponent resolution={resolution} increase={this.increase.bind(this)} decrease={this.decrease.bind(this)} onVote={this.onVote} terminalNumber={3} />
      </React.Fragment>
    );
  }
}

const resolution = 'Free beer to all programmers';

const Task = () => {
  return (
    <div>
      <VotingSystem resolution={resolution} />
    </div>
  );
};

export default Task;

VotingSystem.propTypes = {
  resolution: PropTypes.string.isRequired
}

VotingDisplay.propTypes = {
  resolution: PropTypes.string.isRequired,
  result: PropTypes.number.isRequired
}

VoteComponent.propTypes = {
  resolution: PropTypes.string.isRequired,
}