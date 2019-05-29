
import React, { Component } from 'react';
import { View} from 'react-native';
import api from '../../services/api'
import Dialog from 'react-native-dialog'
import styles from './styles'

export default class dialog extends Component {
    state = {

        visible: true,
        name: "",
        texto: ""

    }

    async componentDidMount() {
        try {

            await api.get('/pensamentoSorteado')
                .then(res => {
                    const pensamentos = res.data

                    this.setState({ name: pensamentos.name })
                    this.setState({ texto: pensamentos.texto })
                })
        } catch (err) {
            this.setState({visible: false})
            alert('erro:', err)
        }

    }

    setVisible = () => {
        this.setState({ visible: false })
    }

    render() {
        return <View>
            <Dialog.Container
                style={styles.container}
                visible={this.state.visible}>
                <Dialog.Title style={styles.title} >Pensamento sorteado:</Dialog.Title>
                <Dialog.Description style={styles.name} >
                    {this.state.name}

                </Dialog.Description>
                <Dialog.Description style={styles.texto}>

                    {this.state.texto}
                </Dialog.Description>
                <Dialog.Button label="Ok" onPress={this.setVisible} style={styles.button} />

            </Dialog.Container>
        </View>
    }
}







