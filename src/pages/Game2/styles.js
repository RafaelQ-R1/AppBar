import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    viewPrincipal: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    viewPrimeira: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'

    },
    viewSegunda: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'

    },
    viewTerceira: {
        flex: 2,
        alignItems: 'center',
        flexDirection: 'column'

    },

    viewLoading: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    textLoading: {
        marginTop: 50

    },

    texto1: {


        fontSize: 30,
        color: 'green',
        marginBottom: 20
    },

    texto2: {


        fontSize: 20,
        color: 'red',
        marginBottom: 20
    },

    texto3: {

        fontSize: 35,
        color: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'

    },

    botao: {

        fontSize: 20,
        backgroundColor: "#FFA500",
        width: 150,
        height: 150,
        marginBottom: 20,
        marginTop: 20,
        height: 60,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#FF4500',
        textAlign: 'center'

    }



})

export default styles