import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Button, Animated, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'

const image1 = require('../../../Assets/images/cerveja.jpg')
const image2 = require('../../../Assets/images/batida.jpg')
const image3 = require('../../../Assets/images/licor.jpg')
const image4 = require('../../../Assets/images/caipirinha.jpg')

export default class Game1 extends Component {

    state = {
        imagem: image1,
        textobotao: "Sortear ",
        vezes: 0,
        sorteado: [],
        AdicionarSorteado: '',
        sorteadoFinal: ''

    }


    sortearImagem = () => {

        if (this.state.textobotao === "Sortear ") {
            infelizes = this.state.sorteado
            if (infelizes.length < 2) {

                alert('Selecione pelo menos duas pessoas.')
                return
            }

            infelizSorteado = Math.floor(Math.random() * infelizes.length)
            this.setState({ sorteadoFinal: infelizes[infelizSorteado] })

            this.setState({ textobotao: 'Sortear bebida' })
            return
        }

        if (this.state.textobotao === "Sortear bebida") {
            this.setState({ textobotao: "Parar" })
            this.setState({ vezes: 0 })
            this.timeout = setInterval(() => {
                const images = [image1, image2, image3, image4],
                    imagemAleatoria = Math.floor(Math.random() * images.length)
                this.setState({ imagem: images[imagemAleatoria] })

            }, 50)
            return
        }
        else if (this.state.textobotao === 'Parar') {
            clearInterval(this.timeout)
            this.setState({ textobotao: 'Número de goles' })
            return
        }

        else if (this.state.textobotao === "Número de goles") {
            const numeroGoles = [1, 2, 3, 4, 5, 6],
                goleAleatorio = Math.floor(Math.random() * numeroGoles.length)
            this.setState({ vezes: numeroGoles[goleAleatorio] })

            this.setState({ textobotao: "Sortear infeliz" })
            return

        }
    }

    AddSorteado = () => {

        const { AdicionarSorteado } = this.state;
        const sorteado = this.state.sorteado
        if (sorteado.includes(AdicionarSorteado)) {
            alert(` ${AdicionarSorteado} já foi adicionado`)
            return
        }
        if (AdicionarSorteado === undefined || AdicionarSorteado == 0) {

            alert('O nome não pode ser em branco ou nulo ')
            return
        }
        sorteado.push(AdicionarSorteado)
        this.setState({ AdicionarSorteado: "" })
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
    }
    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 700
        }).start()
    }

    render() {



        const interpolateRotation = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['-90deg', '0deg'],
        })
        const animatedStyle = {
            transform: [
                { rotate: interpolateRotation }
            ]
        }

        const ButtonDisabledTrue = <Button title="adicionar " onPress={this.AddSorteado} disabled={true} ></Button>
        const ButtonDisabledFalse = <Button title="adicionar " onPress={this.AddSorteado} disabled={false}  ></Button>

        let MyButton
        if (this.state.textobotao === 'Sortear ') {

            MyButton = ButtonDisabledFalse
        }
        else {
            MyButton = ButtonDisabledTrue
        }

        return (
            <ScrollView>
                <View style={styles.viewPrincipal}>
                    <View style={styles.view1}>
                        <Text style={styles.vezes}> sorteado: {this.state.sorteadoFinal}  </Text>
                        <Animated.View style={animatedStyle}>
                            <Image source={this.state.imagem} style={styles.imagem} />
                        </Animated.View>
                        <View style={styles.view2}>
                            <Text style={styles.vezes}>Número de goles:  {this.state.vezes}</Text>

                            <LinearGradient colors={['darkred', 'firebrick', 'red']} start={{ x: 0, y: 0 }} end={{ x: 1.50, y: 1.50 }} style={styles.LinearGradientStyleButton}>
                                <TouchableOpacity
                                    onPress={this.sortearImagem}
                                >
                                    <Text style={styles.botao}>{this.state.textobotao}</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                            <TextInput
                                value={this.state.AdicionarSorteado}
                                onChangeText={AdicionarSorteado => this.setState({ AdicionarSorteado })}
                                placeholder="Adicione alguém"
                            >
                            </TextInput>
                            {MyButton}
                        </View>
                    </View>
                </View>

            </ScrollView>
        )
    }
}

Game1.navigationOptions = {

    headerBackground: (
        <LinearGradient
            colors={['red', 'darkorange']}
            style={{ flex: 1 }}
            start={{ x: 0.25, y: 0.25 }}
            end={{ x: 1, y: 1 }}
        />
    ),
    title: 'Sortear bebida'
}