import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import api from '../../services/api'
import styles from './styles'
import { FadeInView1, FadeInView2, FadeInView3, FadeInView4 } from '../../animations'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


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
                    backgroundColor: "#CED0CE",
                  
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



            <ScrollView >
                <View style={styles.container}>
                    <View>


                    </View>
                    <View style={styles.container}>
                        <FlatList
                            data={this.state.Pensamento}
                            keyExtractor={item => item._id}
                            renderItem={this.renderItem}
                            ItemSeparatorComponent={this.renderSeparator}
                        />
                    </View>
                </View>
            </ScrollView>

        )
    }
}

Game4.navigationOptions = {

    title: 'Pemsamentos'

}


