const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
const RandomNumber = require('./RandomNumber.jsx');
const RandomImage = require('./RandomImage.jsx');

class App extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <RandomNumber/>
          <br/>-----<br/>
          <RandomImage/>
        </div>
      );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));