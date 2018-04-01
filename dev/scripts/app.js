import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './Questions.js';
import OutputMessage from './OutputMessage.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Noel',
      nickname: 'FenaxiZ',
      course: 'Chemistry',
      message: "don't forget me when you're famous",
      closing: false,
      yourName: 'Matt Eng',
      extraMessage: 'test'
    }
  }
  render() {
    return (
      <div>
        <Questions />
        <OutputMessage name={this.state.name} nickname={this.state.nickname} course={this.state.course} message={this.state.message} yourName={this.state.yourName} extraMessage={this.state.extraMessage} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
