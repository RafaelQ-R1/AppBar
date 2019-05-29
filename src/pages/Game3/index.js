import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles'

export default class Game3 extends Component {

    state = {
        initialTime: 3,
        resultado: ''
    }

    _pressOut = () => {
        let init = this.state.initialTime
        if (init != "homem" || init != "boiola") {
            alert('ops!')
            this.setState({ initialTime: 3 })
            return
        }
    }

    _onLongPress = () => {
        var x = setInterval(() => {      
            this.setState({ initialTime: this.state.initialTime - 1 })
            if (this.state.initialTime === 0) {
                clearInterval(x)
                let valores = ['homem', 'boiola']
                let result = Math.floor(Math.random() * valores.length)
                this.setState({ resultado: valores[result] })
                let finalResult = this.state.resultado
                this.setState({ initialTime: finalResult })
                return
            }
        }, 1000)
    }

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.texto}>Descubra teu nível de boyolice</Text>
                <TouchableOpacity onLongPress={this._onLongPress} onPressOut={this._pressOut} >
                    <Text style={styles.button}>Ponha o dedo aqui.</Text>
                </TouchableOpacity>
                <Text style={styles.counter} >{this.state.initialTime}</Text>
            </View>
        )
    }
}

Game3.navigationOptions = {
    title: 'descubra seu nível de boiolice'

}
