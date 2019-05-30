import React, { Component } from 'react'
import { TextInput, Text, View, TouchableHighlight } from 'react-native'
import style from './styles'
import api from '../../services/api'
import Icon from 'react-native-vector-icons/Entypo'

const iconPLane = <Icon name="paper-plane" size={18} color="khaki"  />
export default class Pensamento extends Component {

    state = {
        name: "",
        text: "",

    }

    SendMessage = async () => {

        try {

            if ((this.state.name ) === undefined || (this.state.name) ==="") {
                alert('Texto e nome não podem ser em branco')
                return
            }

            if ((this.state.text ) === undefined || (this.state.text) ==="") {
                alert('Texto e nome não podem ser em branco')
                return
            }

           await api.post('/pensamento', {
               name: this.state.name,
               texto: this.state.text
           })


           alert('Enviado')
           this.setState({ name: "", text: "" })
       } catch (err) {

           alert(err)
       }

   }
   render() {

       return (
           <View>
               <TextInput style={style.footer1}
                   placeholder="Escreva seu Nome"
                   value={this.state.name}
                   onChangeText={text => this.setState({ name: text })}
               >
               </TextInput>
               <TextInput style={style.footer2}
                   placeholder="Escreva seu Pensamento"
                   value={this.state.text}
                   onChangeText={text => this.setState({ text: text })}
                   maxLength={200}
               >
               </TextInput>
               <TouchableHighlight>
                   <Text style={style.button} onPress={this.SendMessage} > Enviar{iconPLane} </Text>
               </TouchableHighlight>
           </View>

       )

   }
}