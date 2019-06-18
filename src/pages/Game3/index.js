import React, { Component } from 'react';
import Quiz from '../../components/Quiz'
import {
    View,
    Text
} from 'react-native';
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Playquiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quizFinish: false,
            score: 0
        }
    }
    _onPressBack() {
        const { goBack } = this.props.navigation
        goBack()
    }
    _quizFinish(score) {
        this.setState({ quizFinish: true, score: score })
    }
    _scoreMessage(score) {
        if (score <= 30) {
            return (<View style={styles.innerContainer} >
                <View style={{ flexDirection: "row" }} >
                    <Icon name="trophy" size={30} color="white" />
                </View>
                <Text style={styles.score}>You need to work hard</Text>
                <Text style={styles.score}>You scored {score}%</Text>
            </View>)
        } else if (score > 30 && score < 60) {
            return (<View style={styles.innerContainer} >
                <View style={{ flexDirection: "row" }} >
                    <Icon name="trophy" size={30} color="white" />
                    <Icon name="trophy" size={30} color="white" />
                </View>
                <Text style={styles.score}>You are good</Text>
                <Text style={styles.score}>Congrats you scored {score}% </Text>
            </View>)
        } else if (score >= 60) {
            return (<View style={styles.innerContainer}>
                <View style={{ flexDirection: "row" }} >
                    <Icon name="trophy" size={30} color="white" />
                    <Icon name="trophy" size={30} color="white" />
                    <Icon name="trophy" size={30} color="white" />
                </View>
                <Text style={styles.score}>You are the master</Text>
                <Text style={styles.score}>Congrats you scored {score}% </Text>
            </View>)
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>           
                {this.state.quizFinish ? <View style={styles.container}>
                    <View style={styles.circle}>
                        {this._scoreMessage(this.state.score)}
                    </View>

                </View> : <Quiz quizFinish={(score) => this._quizFinish(score)} />}

            </View>
        );
    }
}



Playquiz.navigationOptions = {
    title: 'Home',
    headerBackground: (
        <LinearGradient
            colors={['red', 'darkorange']}
            style={{ flex: 1 }}
            start={{ x: 0.25, y: 0.25 }}
            end={{ x: 1, y: 1 }}
        />
    ),
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}


