import { StyleSheet } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const styles = StyleSheet.create({


    container1: {
        flex: 1,
        marginTop: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'ghostwhite',
        width: wp('100%'),
        height: hp('100%')
    },

    container2: {
        flex: 1,
        marginTop: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'ghostwhite',
    },

    containerRow: {

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,

    },


    autorText: {
        textShadowRadius: 40,
        marginRight: 4,
        fontFamily: 'Helvetica',
        fontSize: 17,
        fontWeight: 'bold',
        color: 'indigo'
    },

    nomeText: {
        textShadowRadius: 40,
        fontFamily: 'Helvetica',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8b0000',
        fontStyle: 'italic'
    },
    pensamentoText: {
        marginRight: 10,
        fontFamily: 'Helvetica',
        fontSize: 17,
        fontWeight: 'bold',
        color: 'darkblue',
        textShadowRadius: 40,
    },

    descricaoText: {
        marginBottom: 10,
        fontFamily: 'Helvetica',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        textShadowRadius: 40,

    },
    titulo: {

        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'sans-serif'
    },


    flatview: {
        justifyContent: 'center',
        paddingTop: 30,
        borderRadius: 2,
    },
    name: {
        fontFamily: 'Verdana',
        fontSize: 18
    },
    texto: {
        color: 'red'
    }

})


export default styles