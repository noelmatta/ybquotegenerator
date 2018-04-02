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
      <main>
        <section class="intro">
          <p>Damnit, someone just asked you to sign their yearbook and you don't know what to write. Don't worry... just fill out the form below to get a quick message you can totally use!</p>
        </section>
        <div className="questions">
          <form>
            <label htmlFor="name">What's Their Name?</label>
            <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />
            <label htmlFor="nickname">What's Their Nickname (optional)?</label>
            <input type="text" id="nickname" value={this.state.nickname} onChange={this.handleChange} />
            <label htmlFor="course">What Class Did You Have Together?<br />(leave blank if none)</label>
            <input type="text" id="course" value={this.state.course} onChange={this.handleChange} />
            <label htmlFor="message">Are They...</label>
            <select id="message" onChange={this.handleChange}>
              <option value="1">a rapper/singer/performer/athlete/etc.?</option>
              <option value="2">that person you awkwardly had a crush on?</option>
              <option value="3">really smart and hard-working?</option>
              <option value="4">someone you honestly don't know?</option>            
              <option value="5">the party animal type?</option>            
            </select>
            <label name="after">Do You Still Want To See This Person?</label>
            <input type="checkbox" onClick={this.toggle.bind(this)} />
            <label name="yourName">Finally, What's Your Name?</label>
            <input type="text" id="yourName" value={this.state.yourName} onChange={this.handleChange} />
            <label htmlFor="extraMessage">Anything else you want to say? (optional)</label>
            <textarea type="text" id="extraMessage" value={this.state.extraMessage} onChange={this.handleChange} />
          </form>
          <h2>Cool! Here's your message:</h2>
        </div>
        <OutputMessage name={this.state.name} nickname={this.state.nickname} course={this.state.course} message={this.state.message} yourName={this.state.yourName} after={this.state.after} extraMessage={this.state.extraMessage} />
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
