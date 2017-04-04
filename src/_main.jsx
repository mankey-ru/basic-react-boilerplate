import React from 'react'
import ReactDOM from 'react-dom'
import {
	AppContainer
}
from 'react-hot-loader'

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('app-root')
	)
}

renderApp();

if (module.hot) {
	module.hot.accept('./App.jsx', renderApp)
}

function renderApp() {
	var RootModule = require('./App.jsx')['default'];
	render(RootModule)
}