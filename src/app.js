import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import { Router, Scene } from 'react-native-router-flux';
import PageOne from './scenes/PageOne';
import PageTwo from './scenes/PageTwo';

class App extends Component {

	render(){

		return(
			//Provider here
			<View style={{ flex:1 }}>
				<Router>
			        <Scene key="root">
			          	<Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
			          	<Scene key="pageTwo" component={PageTwo} title="PageTwo" />
			        </Scene>
		      	</Router>
			</View>
		)
	}
}

export default App;