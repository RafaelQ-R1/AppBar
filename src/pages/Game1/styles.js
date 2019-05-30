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
    botao: {

        fontSize: 20,
        backgroundColor: "#FFA500",
        width: 150,
        marginBottom: 20,
        marginTop: 20,
        height: 60,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#FF4500',
        textAlign: 'center'

    },

    botaoAdd: {

        marginBottom: 100
    },

    vezes: {
        fontSize: 20,

    }


})

export default styles