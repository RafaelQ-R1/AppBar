import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({


    view: {

        flex: 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',


    },


    button: {
        backgroundColor: 'purple',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        borderRadius: 3,
        borderWidth: 2,
        borderColor: 'black',

    },

    texto: {

        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold'
    },

    counter: {
        fontSize: 40,
        color: 'green',
        fontWeight: 'bold'


    }



})

export default styles