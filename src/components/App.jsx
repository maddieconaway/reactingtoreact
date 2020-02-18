
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: props.text, inputValue: '', hasLoaded: false };
  }

  handleEvent(e) {
    this.setState({ inputValue: e.target.value });
  }

  clickEvent(e) {
    this.setState({hasLoaded : !this.state.hasLoaded});
  }

  componentDidMount() {
    this.setState({ hasLoaded: true });
    console.log('mounted')
  }

  render() {
    if (this.state.hasLoaded) {
      return (
        <React.Fragment>
          <Maddie1 other={'Hello this is H1 from App.'} />
          <Maddie2 other={'Hello this is H2 from App'} />
          <div>{this.state.text}</div>
          <input value={this.state.inputValue} onChange={e => this.handleEvent(e)} />
          <button onClick={e => this.clickEvent(e)}>Load</button>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
          <button onClick={e => this.clickEvent(e)}>Load</button>
        </React.Fragment>
      )
    }
  }
}

const Maddie1 = props => {
  return (
    <div>
      <h1 className="greeting">{props.other}</h1>
    </div>
  )
};

class Maddie2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h2>{this.props.other}</h2>;
  }
}

export default App;

