import React from 'react-native'

let {
  StyleSheet,
  Navigator,
  PropTypes
} = React

import MainContainer from './MainContainer'
import LoginContainer from './LoginContainer.js'
import FooterContainer from '../components/Footer'
import Welcome from '../components/Welcome'
class App extends React.Component {
  constructor(props) {
    super(props)
  }

  renderScene(route, navigator) {
    let Component = route.component

    return (
      <Component navigator={navigator} route={route} />
    )
  }

  configureScene(route) {
    if (route.name && route.name === 'Search') {
      return Navigator.SceneConfigs.FadeAndroid
    } else {
      return Navigator.SceneConfigs.FloatFromBottomAndroid
    }
  }

  render() {
    return (
      <Navigator
        ref='navigator'
        style={styles.navigator}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
        initialRoute={{
          component: Welcome,
          name: 'welcome'
        }}
        navigationBar= {<FooterContainer />}
      />
    )
  }
}

let styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
})

export default App
