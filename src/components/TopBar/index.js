import React from 'react'
import { Text, Image, View } from 'react-native'
const imagem = require('../../../Assets/images/joaquim.jpg')
import styles from './styles'

export default props => {

    return (
        <View style={styles.view}>
            <Image source={imagem} style={styles.imagem} ></Image>
            <Text style={styles.texto}>Aplicativo do boteco do joaquim</Text>
        </View>

    )
}