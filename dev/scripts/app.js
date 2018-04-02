import React from 'react';
import ReactDOM from 'react-dom';
import OutputMessage from './OutputMessage.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      nickname: '',
      course: '',
      message: 0,
      after: false,
      yourName: '',
      extraMessage: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  toggle(e) {
    // e.preventDefault();
    this.setState({after: !this.state.after});
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">What's Their Name?</label>
          <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />
          <label htmlFor="nickname">What's Their nickname (optional)?</label>
          <input type="text" id="nickname" value={this.state.nickname} onChange={this.handleChange} />
          <label htmlFor="course">What class did you have together?</label>
          <input type="text" id="course" value={this.state.course} onChange={this.handleChange} />
          <label htmlFor="message">Are they...</label>
          <select id="message" onChange={this.handleChange}>
            <option value="1">a rapper/singer/performer/athlete/etc.?</option>
            <option value="2">that person you awkwardly had a crush on?</option>
            <option value="3">really smart and hard-working?</option>
            <option value="4">someone you honestly don't know?</option>            
            <option value="5">the party animal type?</option>            
          </select>
          <label htmlFor="after">Do you still want to see this person?</label>
          <input type="checkbox" onClick={this.toggle.bind(this)} />
          <label htmlFor="yourName">Finally, What's Your Name?</label>
          <input type="text" id="yourName" value={this.state.yourName} onChange={this.handleChange} />
          <label htmlFor="extraMessage">Anything else you want to say? (optional)</label>
          <textarea type="text" id="extraMessage" value={this.state.extraMessage} onChange={this.handleChange} />
        </form>
        <OutputMessage name={this.state.name} nickname={this.state.nickname} course={this.state.course} message={this.state.message} yourName={this.state.yourName} after={this.state.after} extraMessage={this.state.extraMessage} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
