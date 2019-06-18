import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const styles = StyleSheet.create({

    viewPrincipal: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: wp('100%'),
        height: hp('100%')

    },

    view1: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    view2: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    imagem: {
        marginTop: 30,
        width: 250,
        height: 250,
        backgroundColor: 'transparent'

    },


    botaoAdd: {

        marginBottom: 100
    },

    vezes: {
        fontSize: 20,

    },



    botao: {

        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 7,
        color: '#d2691e',
        backgroundColor: 'transparent',


    },

    LinearGradientStyleButton: {
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


})

export default styles