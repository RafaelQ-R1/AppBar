import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import api from '../../../services/api'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
export default class Game4 extends Component {

    state = {
        drinks: []
    }

    async componentDidMount() {
        this.loadDrinks()
    }

    loadDrinks = async () => {
        const response = await api.get('/drinks')
        const { drinks } = response.data
        this.setState({ drinks })

    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "black",
                    borderRadius: 100,
                

                }}
            />
        );
    };

    renderItem = ({ item }) => (
        <View style={styles.container} >
            <View style={styles.containerRow}>
                <Text style={styles.autorText}> Autor:</Text>
                <Text style={styles.nomeText}>{item.nome}</Text>
            </View>

            <View style={styles.itensView}>
                <Text style={styles.pensamentoText}>Nome do Drink</Text>
                <Text style={styles.descricaoText}>"{item.nomeDrink}"</Text>

                <Text style={styles.pensamentoText}>Ingredientes:</Text>
                <Text style={styles.descricaoText}>{item.ingredientes}</Text>

                <Text style={styles.pensamentoText}>Modo de preparo:</Text>
                <Text style={styles.descricaoText}>{item.modoPreparo}</Text>

                <Text style={styles.pensamentoText}>Tempo estimado:</Text>
                <Text style={styles.descricaoText}>{item.tempoEstimado}</Text>

                <Text style={styles.pensamentoText}>Serve quantos drinks?</Text>
                <Text style={styles.descricaoText}>{item.numeroDrinks}</Text>
            </View>
        </View>
    )

    render() {
        return (
            <View>

                <ScrollView >
                    <View style={styles.container1}>

                        <View style={styles.container2}>

                            <FlatList
                                data={this.state.drinks}
                                keyExtractor={item => item._id}
                                renderItem={this.renderItem}
                                ItemSeparatorComponent={this.renderSeparator}
                            />

                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

Game4.navigationOptions = {

    title: 'Receitas de Drinks',
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


