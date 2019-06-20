import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import api from '../../services/api'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient'
const iconText = <Icon name="account" size={20} color="#4F8EF7" />
const iconThink = <Icon name='chat-processing' color='cornflowerblue' />
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

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 2,
                    width: "86%",
                    backgroundColor: "red",
                    borderRadius: 100,
                
                }}
            />
        );
    };

    renderItem = ({ item }) => (
        <View style={styles.container} >
            <View style={styles.containerRow}>
                <Text style={styles.autorText}>{iconText} Autor:</Text>
                <Text style={styles.nomeText}>{item.name}</Text>
            </View>
            <Text style={styles.pensamentoText}>Pemsamento{iconThink}:</Text>
            <Text style={styles.descricaoText}>"{item.texto}"</Text>
        </View>
    )

    render() {
        return (
            <View>
        
                <ScrollView >
                    <View style={styles.container1}>

                        <View style={styles.container2}>
                            <LinearGradient colors={['gold', 'darkorange', 'red']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                                <FlatList
                                    data={this.state.Pensamento}
                                    keyExtractor={item => item._id}
                                    renderItem={this.renderItem}
                                    ItemSeparatorComponent={this.renderSeparator}
                                />
                            </LinearGradient>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

Game4.navigationOptions = {

    title: 'Pemsamentos',
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


