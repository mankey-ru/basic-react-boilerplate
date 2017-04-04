import React, {
	Component
}
from 'react';
import Counter from './Counter.jsx'

export default class Root extends Component {
	render() {
		var mainStyle = {
			width: '500px',
			margin: '3em auto',
			fontFamily: 'consolas, monospace'
		}
		return (
			<div style={mainStyle}>
				<h1>React is weird <Counter /></h1>
			</div>
		);
	}
}