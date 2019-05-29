import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    imagem: {
        flex: 2,
        width: 120,
        height: 120,
        marginLeft: 10,

        borderRadius: 300,
    },

    texto: {
        flex: 4,
        flexDirection: 'row',
        fontSize: 22,
        color: 'red',
        fontWeight: 'bold',
        marginTop: 25,
        marginLeft: 10


    },
    view: {
        flex: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white'

    }

})

export default styles