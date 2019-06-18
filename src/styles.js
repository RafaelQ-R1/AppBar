import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'



const styles = StyleSheet.create({
    container1: {
        flex: 6,
        alignItems: 'center',
        width: wp('100%'),
        height: hp('100%')

    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        marginTop: 0,

    },
    container3: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,


    },
    container4: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',


    },


    buttonJogo1: {

        fontSize: 15,
        margin: 7,
        color: '#fff',
        backgroundColor: 'transparent',


    },

    LinearGradientStyle: {
        height: 45,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginBottom: 20,
        width: 240,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 0.75,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },





})

export default styles