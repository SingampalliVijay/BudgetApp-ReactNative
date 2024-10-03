import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#EDDFE0'
    },
    card: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 3,
        backgroundColor: 'white'
    },
    overlayCard: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 40,
        margin: 10,
        backgroundColor: 'white',
        zIndex: 10,
    },
    dropdownView: {
        padding: 10
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 8,
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
    dob: {
        padding: 10,
        color: 'black'
    },
    date: {
        fontSize: 15,
        color: 'black',
        marginLeft: 20
    },
    dateOfBirthContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        width: '89%',
        marginLeft: 20,
        borderColor: 'gray'
    },
    icon: {
        fontSize: 20,
        color: '#333',
        padding: 10,
    },
    amount: {
        fontSize: 15,
        color: 'black',
        marginLeft: 20
    },
    radioButton: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        width: '89%',
        marginLeft: 20,
        padding: 8,
        borderColor: 'gray'

    },
    payment: {
        fontSize: 15,
        color: 'black',
        marginLeft: 20
    },
    notes: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        width: '89%',
        marginLeft: 20,
        borderColor: 'gray',
        height: 100
    },
    notesText: {
        padding: 10,
    },
    notesField:{
        fontSize: 15,
        color: 'black',
        marginLeft: 20
    },
    button: {
        marginLeft: 70,
        borderRadius: 7,
        padding: 15,
        width: '60%',
        backgroundColor: '#2196F3',
        borderColor: 'gray',
    },
    submit: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    error: {
        color: '#FF3E3E',
        fontSize: 14,
        marginBottom: 10,
        marginLeft:20
      },
});
export default styles;