import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import api from '../../services/api'
import styles from './styles'
import { FadeInView1, FadeInView2, FadeInView3, FadeInView4 } from '../../animations'


export default class Game4 extends Component {

    state = {
        Pensamento: []
    }

    async componentDidMount() {
        this.loadPensamentos()
    }

    loadPensamentos = async () => {
        const response = await api.get('/Pensamentos')
        const { Pensamento } = response.data
        this.setState({ Pensamento })

    }

    renderItem = ({ item }) => (
        <View style={styles.container} >
            <View style={styles.containerRow}>
                <Text style={styles.autorText}>Autor:</Text>
                <Text style={styles.nomeText}>{item.name}</Text>
            </View>
            <Text style={styles.pensamentoText}>Pensamento:</Text>
            <Text style={styles.descricaoText}>{item.texto}</Text>
        </View>

    )


    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                    <View>
                        <Text style={styles.titulo}>Lista de Pensamentos</Text>

                    </View>
                    <View style={styles.container}>
                        <FlatList
                            data={this.state.Pensamento}
                            keyExtractor={item => item._id}
                            renderItem={this.renderItem}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

Game4.navigationOptions = {

    title: 'Lista de Pensamentos'

}


