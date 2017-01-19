const React = require('react');
const axios  = require('axios');

class RandomImage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			curImage: null
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		axios.get('/randomImage')
		.then(function(resp) {
			var canvas = document.getElementById('canvas');
			var ctx = canvas.getContext('2d');
			var palatte = ctx.getImageData(0, 0, 128, 128);
			palatte.data.set(new Uint8ClampedArray(resp.data.img));
			ctx.putImageData(palatte, 0, 0);
		});
	}

	render() {
		return (
				<div>
					<form onSubmit={this.handleSubmit}>
						<button type="submit">Generate Random Image</button>
					</form>
					<canvas id="canvas" width="128" height="128"></canvas>
				</div>
			);
	}
}

module.exports = RandomImage;