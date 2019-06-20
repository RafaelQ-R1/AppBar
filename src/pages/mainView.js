import React from 'react'
import styles from '../styles'
import Dialog from '../components/Dialog'
import Pensamento from '../components/Pensamento'
import TopBar from '../components/TopBar'
import { View, ImageBackground, TouchableOpacity, Text, ScrollView, Button } from 'react-native'
import { FadeInView1, FadeInView2, FadeInView3, FadeInView4 } from '../animations'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconMaterial1 from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMaterial2 from 'react-native-vector-icons/MaterialCommunityIcons'
import IconAwesine from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'
const imagemFundo = require('../../Assets/images/bar.jpeg')
const iconBottle = <IconEntypo name="drink" size={20} color="darkorange" />
const iconQuestion = <IconAwesine name="question" size={20} color="darkorange" />
const iconThink = <IconMaterial1 name="comment-processing-outline" size={20} color="darkorange" />
const iconTest = <IconMaterial2 name="test-tube" size={20} color="darkorange" />


export const GradientButton = props => {
    return (

        <LinearGradient colors={['darkred', 'red', 'white']} start={{ x: 0, y: 0 }} end={{ x: 1.50, y: 1.50 }} style={styles.LinearGradientStyle}  >
            <Text style={styles.buttonJogo1}> {props.icon} {props.label}</Text>
        </LinearGradient>
    )

}

const mainView = ({ navigation }) => {


    

    return (

        <ScrollView  >
            < View style={styles.container1}>
                <Dialog />
                <ImageBackground source={imagemFundo} style={{ width: '100%', height: '100%' }} >
                    <View style={styles.container2} >
                        <TopBar />
                    </View>
                    <FadeInView1 style={styles.container3}>
                        <FadeInView1 >
                            <TouchableOpacity onPress={() => navigation.navigate('game1')}>
                                <GradientButton label="Jogo da bebida" icon={iconBottle}> </GradientButton>
                            </TouchableOpacity>
                        </FadeInView1>

                        <FadeInView2>
                            <TouchableOpacity onPress={() => navigation.navigate('game2')}>
                                <GradientButton label="Afronhado ou Viril?" icon={iconQuestion}>>  </GradientButton>
                            </TouchableOpacity>
                        </FadeInView2>

                        <FadeInView3>
                            <TouchableOpacity onPress={() => navigation.navigate('game3')}>
                                <GradientButton label="Quiz do bar!" icon={iconTest}>>  </GradientButton>
                            </TouchableOpacity>
                        </FadeInView3>

                        <FadeInView4>
                            <TouchableOpacity onPress={() => navigation.navigate('game4')}>
                                <GradientButton label="Pensamentos" icon={iconThink}>>  </GradientButton>
                            </TouchableOpacity>
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
    title: 'Home',
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

export default mainView