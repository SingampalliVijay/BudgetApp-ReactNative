import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#EDDFE0'
    },
    card: {
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    dropdownView: {
        marginTop: 30,
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
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        width: '89%',
        marginLeft: 20,
        padding: 10,
        paddingLeft: 17,
        borderColor: 'gray',
    },
    payment: {
        fontSize: 15,
        color: 'black',
        paddingTop: 6,
        paddingRight: 10
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
    notesField: {
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
        marginLeft: 20
    },
    editIconContainer: {
        position: 'absolute',
        top: 10,
        right: 30,
    },
    editIcon: {
        color: '#000',
        marginBottom: 10
    },


    dropdownButtonStyle: {
        width: '95%',
        height: 50,
        backgroundColor: '#E9ECEF',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownButtonArrowStyle: {
        fontSize: 28,
    },
    dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },

});
export default styles;