const React = require('react');
const axios = require('axios');

class RandomNumber extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			curNum: 0
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		const context = this;
		e.preventDefault();
		var minNumber = document.getElementById('minNumber').value;
		var maxNumber = document.getElementById('maxNumber').value;
		var base = document.getElementById('base').value;
		if(minNumber === '' || isNaN(minNumber)) {
			alert('Please enter a valid minimum number.');
			return;
		}
		if(maxNumber === '' || isNaN(maxNumber)) {
			alert('Please enter a valid maximum number.');
			return;
		}
		if(Number(minNumber) > Number(maxNumber)) {
			alert('Minimum must be smaller than maximum');
			return;
		}

		axios.get('https://www.random.org/integers/?num=1&min=' + minNumber + '&max=' + maxNumber + '&col=1&base=' + base + '&format=plain&rnd=new')
		.then(function(resp) {
			context.setState({
				curNum: resp.data
			});
		});
	}

	render() {
		return (
				<div>
					Random Number Generator <br/>
					Your Random Number: {this.state.curNum}
					<form onSubmit={this.handleSubmit}>
						Minimum: <input id="minNumber" type="text"></input><br/>
						Maximum: <input id="maxNumber" type="text"></input><br/>
						Base: <select id="base">
							<option value="2">2</option>
							<option value="8">8</option>
							<option value="10">10</option>
							<option value="16">16</option>
						</select><br/>
						<button type="submit">Generate Number</button>
					</form>
				</div>
			);
	}
}

module.exports = RandomNumber;