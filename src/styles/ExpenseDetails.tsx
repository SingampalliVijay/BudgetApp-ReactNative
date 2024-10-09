import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    overView: {
        margin: 10,
        marginTop: 100,
        paddingLeft: 60,
        paddingTop: 40,
        width: '95%',
        borderWidth: 0.7,
        borderRadius: 10
    },
    itemText: {
        fontSize: 20,
        color: '#001F3F',
        fontWeight: '600',
        marginBottom: 8,
    },
    item: {
        flexDirection: 'row',
        margin: 5
    },
    categoryText: {
        fontSize: 20,
        color: '#333',
        marginBottom: 8,
        paddingLeft: 10,
        marginRight: 10,
        paddingRight: 7,
        width: '85%'
    },
    editIconContainer: {
        position: 'absolute',
        top: 50,
        right: 30,
    },
    editIcon: {
        color: '#000',
        marginBottom: 10
    },
    input: {
        borderRadius: 10,
        borderWidth: 0.7,
        marginVertical: 10,
        backgroundColor: '#FFF',
        margin: 10,
        marginBottom: 15,
        paddingLeft: 10
    },
    notes: {
        borderRadius: 10,
        borderWidth: 0.7,
        backgroundColor: '#FFF',
        margin: 10,
        marginBottom: 15,
        paddingLeft: 10,
        height:100
    },
    notesText: {
        padding: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        width: '90%',
        backgroundColor: 'white',
    },
    modalText: {
        fontSize: 20,
        color: 'black',
        fontWeight: '600',
        padding:20
    },
    button: {
        marginLeft: 100,
        borderRadius: 7,
        width: '50%',
        backgroundColor: '#2196F3',
        marginBottom:20
    },
    submit: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        margin: 10
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black'
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 8,
        margin: 10
    },
    dateOfBirthContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        borderColor: 'gray'
    },
    dob: {
        padding: 10,
        color: 'black'
    },
    icon: {
        fontSize: 20,
        color: '#333',
        padding: 10,
    },
    radioButton: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 8,
        borderColor: 'gray'
    },
})

export default styles;
