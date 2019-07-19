import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainView: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center'


    },
    childrenView1: {
        flex: 1,
        marginBottom: 2,
        alignItems: 'center',

    },
    childrenView2: {
        flex: 5,
        marginTop: 2,

    },

    childrenView3: {
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button1: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 7,
        color: '#d2691e',
        backgroundColor: 'transparent',

    },

    button2: {

    },

    LinearGradientStyleButton1: {
        height: 38,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        padding: 8,
        width: 150,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 0.75,
        marginTop: 10,
        borderRadius: 20,
        justifyContent: 'center',

    },

    LinearGradientStyleButton2: {
        height: 60,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        padding: 8,
        width: 170,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 0.75,
        marginTop: 10,
        borderRadius: 20,
        justifyContent: 'center',

    },

    TextInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ff7f50',




    },

    Text: {
        fontSize: 18,
        fontWeight: 'bold'
    }




})
export default styles