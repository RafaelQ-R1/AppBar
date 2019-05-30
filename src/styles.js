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
        flexDirection: 'column',
        fontSize: 20,
        backgroundColor: "red",
        width: 300,
        height: 60,
        marginBottom: 2,
        marginTop: 2,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'white',
        marginLeft: 0,
        padding: 15,



    },



})

export default styles