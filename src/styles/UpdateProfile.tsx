import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    name: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
        padding: 20,
        paddingBottom: 10
    },
    nameField: {
        borderWidth: 1,
        borderColor: 'black',
        width: '85%',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#F5F5F7',
        marginLeft: 20
    },
    button: {
        marginTop: 20,
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
})

export default styles;