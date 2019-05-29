import React, { Component } from 'react'
import { Text, View, Divider, Button } from 'react-native'
import styles from './styles'
import Spinner from 'react-native-spinkit'
import Lista from './lista'

export default class Game2 extends Component {

    state = {
        showSpiner: false,
        showButton: true,
        resultadoFinal: '',
        description: '',
        calculando: ''


    }

    gerarResultado = async () => {

        this.setState({
            showButton: false,
            showSpiner: true,
        })

        await setTimeout(async () => {
            this.finalizar()
        }, 3000)

    }

    finalizar = async () => {
        this.setState({ showSpiner: false })
        const resultado = await ['Você é Afronhado', 'Você é Viril'],
            valorResultado = Math.floor(Math.random() * resultado.length)
        this.setState({ resultadoFinal: resultado[valorResultado] })
        if (this.state.resultadoFinal === 'Você é Afronhado') {
            const valores1 = Lista.afronhado
            valorfinal1 = Math.floor(Math.random() * valores1.length)
            this.setState({ description: valores1[valorfinal1] })
        } else {
            const valores2 = Lista.viril
            valorfinal2 = Math.floor(Math.random() * valores2.length)

            this.setState({ description: valores2[valorfinal2] })
        }

    }


    render() {
        const spiner = <View style={styles.viewLoading}>
            <Spinner color={'black'} size={100} type={'Circle'} />
            <Text style={styles.textLoading}>Calculando...</Text>
        </View>


        const Botao = <View >
            <Button title="Descobrir?" onPress={this.gerarResultado}></Button>
            <Text>{this.state.calculando}</Text>

        </View>
        const Tela = <View style={styles.viewPrincipal}>

            <View style={styles.viewPrimeira} >
                <Text style={styles.texto1}> {this.state.resultadoFinal}</Text>

            </View>
            <View style={styles.viewSegunda}>
                <Text style={styles.texto2}>{this.state.description} </Text>
            </View>
        </View>

        const Mostrar = this.state.showButton
        const MostrarSpiner = this.state.showSpiner

        return (
            <View style={styles.viewPrimeira}>
                {MostrarSpiner ? (
                    spiner
                ) : (
                        null
                    )}
                {Mostrar ? (
                    Botao
                ) : (
                        Tela
                    )}
            </View>

        )
    }
}
Game2.navigationOptions = {

    title: 'Você é afronhado ou viril?',
}

