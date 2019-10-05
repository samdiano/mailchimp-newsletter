import React from 'react';
import Signup from './components/Signup/Signup';
import Success from './components/Success/Success';
import Failed from './components/Failed/Failed';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<div className='wrapper'>
					<Switch>
						<Route exact path='/' component={Signup} />
						<Route exact path='/success' component={Success} />
						<Route exact path='/failed' component={Failed} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
