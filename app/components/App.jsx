const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
const RandomNumber = require('./RandomNumber.jsx');

class App extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <RandomNumber />
          <br/>-----<br/>
        </div>
      );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));