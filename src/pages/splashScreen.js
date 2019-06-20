import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

class SplashScreen extends React.Component {
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('mainView');
    }
  }

  render() {
    return (
      <LinearGradient colors={['crimson', 'darkorange']} start={{ x: 0, y: 0 }} end={{ x: 0.75, y: 0.75 }} style={styles.viewStyles} >
        <View >
          <Text style={styles.textStyles}>
            App BOTECO DO JOAQUIM
        </Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'orange'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}

export default SplashScreen;