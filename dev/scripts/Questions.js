import React from 'react';

class Questions extends React.Component(props) {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        return (
            <form>
                <label htmlFor="name">What's Their Name?</label>
                <input type="text" value={props.studentDetails.name} onChange={this.handleChange} />
                <label htmlFor="nickname">Nickname? (optional)</label>
                <input type="text" value="nickname" />
            </form>
        )
    };
}

export default Questions;