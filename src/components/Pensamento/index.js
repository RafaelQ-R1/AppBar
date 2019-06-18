import React, { Component } from 'react'
import { TextInput, Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'
import api from '../../services/api'
import LinearGradient from 'react-native-linear-gradient'

export const GradientButton = props => {
    return (

        <LinearGradient colors={['darkred', 'red', 'white']} start={{ x: 0, y: 0 }} end={{ x: 1.50, y: 1.50 }} style={styles.LinearGradientStyleButton} >
            <TouchableOpacity onPress={() => props.onClick(props.label)}>
                <Text style={styles.buttonJogo1} > {props.label}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )

}


export default class Pensamento extends Component {

    state = {
        name: "",
        text: "",

    }


    SendMessage = async () => {

        try {

            if ((this.state.name) === undefined || (this.state.name) === "") {
                alert('Texto e nome não podem ser em branco')
                return
            }

            if ((this.state.text) === undefined || (this.state.text) === "") {
                alert('Texto e nome não podem ser em branco')
                return
            }

            await api.post('/pensamento', {
                name: this.state.name,
                texto: this.state.text
            })


            alert('Enviado')
            this.setState({ name: "", text: "" })
        } catch (err) {

            alert(err)
        }

    }
    render() {

        return (
            <View>
                <LinearGradient colors={['#c3c3c3', '#FFFFFF']} start={{ x: 0.10, y: 0.10 }} end={{ x: 0.75, y: 0.75 }} style={styles.LinearGradientStyle1} >

                    <TextInput style={styles.TextInputStyleClass1}
                        placeholder="Escreva seu Nome"
                        value={this.state.name}
                        onChangeText={text => this.setState({ name: text })}
                    />

                </LinearGradient>
                <LinearGradient colors={['#c3c3c3', '#FFFFFF']} start={{ x: 0.10, y: 0.10 }} end={{ x: 0.75, y: 0.75 }} style={styles.LinearGradientStyle2} >

                    <TextInput
                        style={styles.TextInputStyleClass2}
                        placeholder="Escreva seu Pensamento"
                        value={this.state.text}
                        onChangeText={text => this.setState({ text: text })}
                        maxLength={200}
                    />

                </LinearGradient>

                <GradientButton onClick={this.SendMessage} label='Enviar' >  </GradientButton>

            </View >

        )

    }
}


