import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        width: '90%',
        margin: 20
    },
    itemText: {
        fontSize: 20,
        color: '#333',
        marginBottom: 8,
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#EDDFE0'
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        color: '#1E3E62',
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'white',
        height: 60
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300
    },
    itemList: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
    },
    list: {
        marginBottom: 20,
    },
    addButton: {
        position: 'absolute',
        bottom: 30,
        right: 30
    },
    addIcon: {
        color: 'green',
        fontSize: 50,
    },

})

export default styles;