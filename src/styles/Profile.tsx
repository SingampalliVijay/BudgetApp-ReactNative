import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#387478'
    },
    titleView: {
        backgroundColor: 'white',
        height: 60,
        padding: 9
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        color: 'black',
        fontWeight: '600'
    },
    aboutView: {
        flexDirection: 'row',
        margin: 20,
        borderBottomWidth: 1,
        padding: 10,
    },
    aboutIcon: {
        color: 'black'
    },
    about: {
        fontSize: 20,
        color: 'black',
        paddingLeft: 10,
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
        margin: 10,
        fontSize: 20,
        color: 'black'
    },
    closeIcon: {
        position: 'absolute',
        right: 8,
        top: 5,
        fontSize: 30,
        color: 'black'
    },
    profileView: {
        flexDirection: 'row',
        margin: 20,
        borderBottomWidth: 1,
        padding: 10,
    },
    user: {
        color: 'black',
    },
    name: {
        width: '65%',
        height: 60,
        marginTop: 30,
        marginLeft: 10,
        paddingLeft: 10,
        fontSize:20,
        fontWeight:'400',
        color:'black'
    },
    settingIcon: {
        position: 'absolute',
        // right: 20,
        // top: 10,
        color: 'black'
    },
    editIcon: {
        position: 'absolute',
        // right: 60,
        // left:10,
        top: 50,
        color: 'black'
    },
    totalView:{
        borderWidth:0.2
    }
})

export default styles;