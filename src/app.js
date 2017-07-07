import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import PageOne from './scenes/PageOne';
import PageTwo from './scenes/PageTwo';

class App extends Component {

	render(){

		return(
			<Provider store={createStore(reducers)}>
				<View style={{ flex:1 }}>
					<Router>
				        <Scene key="root">
				          	<Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
				          	<Scene key="pageTwo" component={PageTwo} title="PageTwo" />
				        </Scene>
			      	</Router>
				</View>
			</Provider>
		)
	}
}

export default App;