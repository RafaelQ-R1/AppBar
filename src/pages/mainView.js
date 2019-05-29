import React from 'react'
import styles from '../styles'
import Dialog from '../components/Dialog'
import Pensamento from '../components/Pensamento'
import TopBar from '../components/TopBar'
const imagemFundo = require('../../Assets/images/bar.jpg')
import { View, ImageBackground, TouchableHighlight, Text, ScrollView } from 'react-native'
import { FadeInView1, FadeInView2, FadeInView3, FadeInView4 } from '../animations'

const mainView = ({ navigation }) => {

    return (

        <ScrollView>
            < View style={styles.container1} >
                <Dialog />
                <ImageBackground source={imagemFundo} style={{ width: '100%', height: '100%' }} >
                    <View style={styles.container2} >
                        <TopBar />
                    </View>
                    <FadeInView1 style={styles.container3}>

                        <FadeInView1>

                            <TouchableHighlight onPress={() => navigation.navigate('game1')}>

                                <Text style={styles.buttonJogo1}>Sorteio da bebida</Text>

                            </TouchableHighlight>
                        </FadeInView1>

                        <FadeInView2>
                            <TouchableHighlight onPress={() => navigation.navigate('game2')}>
                                <Text style={styles.buttonJogo1}> Afronhado ou viril? </Text>
                            </TouchableHighlight>
                        </FadeInView2>

                        <FadeInView3>
                            <TouchableHighlight onPress={() => navigation.navigate('game3')}>
                                <Text style={styles.buttonJogo1}>Teste de boiolômetro</Text>
                            </TouchableHighlight>
                        </FadeInView3>
                        <FadeInView4>
                            <TouchableHighlight onPress={() => navigation.navigate('game4')}>
                                <Text style={styles.buttonJogo1}>pemsamentos</Text>
                            </TouchableHighlight>
                        </FadeInView4>

                    </FadeInView1>

                    <View style={styles.container4} >
                        <Pensamento />
                    </View>
                </ImageBackground>
            </View >
        </ScrollView>


    )

}

mainView.navigationOptions = {

    title: 'Home'
}

export default mainView