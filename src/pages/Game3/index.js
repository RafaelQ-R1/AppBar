
import React, { Component } from 'react'
import { Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import api from '../../services/api'
import styles from './styles'

export const GradientButton = props => {
    return (
        <LinearGradient colors={['darkred', 'red', 'white']} start={{ x: 0, y: 0 }} end={{ x: 1.50, y: 1.50 }} style={styles.LinearGradientStyleButton1}  >
            <Text style={styles.button1}> {props.icon} {props.label}</Text>
        </LinearGradient>
    )

}
export default class index extends Component {
    constructor(props) {
        super(props)
        navigation = this.props.navigation
    }

    state = {
        nome: '',
        email: '',
        nomeDrink: '',
        ingredientes: '',
        modoPreparo: '',
        tempoEstimado: '',
        numeroDrinks: ''

    }

    enviarReceita = async () => {
        try {

            const {
                nome,
                email,
                nomeDrink,
                ingredientes,
                modoPreparo,
                tempoEstimado,
                numeroDrinks } = this.state

            if (!nome || !email || !nomeDrink || !tempoEstimado || !ingredientes || !modoPreparo || !tempoEstimado || !numeroDrinks) {
                alert('Erro, existem campos vazios.')
                return
            }

            await api.post('/enviarReceita', {
                nome: nome,
                email: email,
                nomeDrink: nomeDrink,
                ingredientes: ingredientes,
                modoPreparo: modoPreparo,
                tempoEstimado: tempoEstimado,
                numeroDrinks: numeroDrinks
            })

            alert('Enviado')
            this.setState({
                nome: "",
                email: "",
                nomeDrink: "",
                ingredientes: "",
                modoPreparo: "",
                tempoEstimado: "",
                numeroDrinks: ""
            })

        } catch (err) {
            alert(err)
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.mainView}>

                    <View style={styles.childrenView2}>
                        <Text style={styles.Text}> Enviar uma receita de drink </Text>
                        <TextInput
                            placeholder="Seu nome"
                            value={this.state.nome}
                            onChangeText={nome => this.setState({ nome })}
                            multiline={true}
                            style={styles.TextInput}
                        />
                        <TextInput
                            placeholderTextColor="darkorange"
                            placeholder="Seu email"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            multiline={true}
                            style={styles.TextInput}
                        />
                        <TextInput

                            placeholder="Nome do drink"
                            value={this.state.nomeDrink}
                            onChangeText={nomeDrink => this.setState({ nomeDrink })}
                            multiline={true}
                            style={styles.TextInput}
                        />
                        <TextInput
                            placeholderTextColor="darkorange"
                            placeholder="Ingredientes"
                            value={this.state.ingredientes}
                            onChangeText={ingredientes => this.setState({ ingredientes })}
                            multiline={true}
                            style={styles.TextInput}
                        />
                        <TextInput
                            placeholder="modo de preparo"
                            value={this.state.modoPreparo}
                            onChangeText={modoPreparo => this.setState({ modoPreparo })}
                            multiline={true}
                            style={styles.TextInput}
                        />
                        <TextInput
                            placeholderTextColor="darkorange"
                            placeholder="tempo estimado para preparar"
                            value={this.state.tempoEstimado}
                            onChangeText={tempoEstimado => this.setState({ tempoEstimado })}
                            multiline={true}
                            style={styles.TextInput}
                        />
                        <TextInput
                            placeholder="Numero de porções"
                            value={this.state.numeroDrinks}
                            keyboardType="numeric"
                            maxLength={2}
                            onChangeText={numeroDrinks => this.setState({ numeroDrinks })}
                            multiline={true}
                            style={styles.TextInput}

                        />
                        <View style={styles.childrenView3}>
                            <TouchableOpacity onPress={this.enviarReceita}>
                                <GradientButton label="Enviar receita" style={styles.button1} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.childrenView1}>
                            <TouchableOpacity onPress={() => navigation.navigate('drinks')}>
                                <GradientButton label="Lista de drinks" style={styles.button1} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}



index.navigationOptions = {

    title: 'Enviar receita',
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







