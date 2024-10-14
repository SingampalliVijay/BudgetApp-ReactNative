import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        width: '90%',
        alignSelf: 'center',
    },
    searchIcon: {
        marginRight: 10,
    },
    icon: {
        marginHorizontal: 8,
        padding: 5,
    },
    input: {
        flex: 1,
        height: 40,
        color: '#000',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        width: '50%',
        padding: 15,
        backgroundColor: 'white',
        position: 'absolute',
        top: 69,
        right: 30,
    },
    modalOption: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    modalText: {
        fontSize: 15,
        color: 'black',
        fontWeight: '500',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 5,
    },
    closeIcon: {
        color: 'black',
    },
    overlay: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    modalOverlayCat: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalViewCat: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    searchCat: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1
    },
});

export default styles;
