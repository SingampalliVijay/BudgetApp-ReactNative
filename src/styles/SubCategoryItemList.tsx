import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    main: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 16,
        textAlign: 'center',
    },
    list: {
        flex: 1,
        paddingHorizontal: 16,
    },
    itemContainer: {
        flex: 1,
        margin: 10,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    itemText: {
        fontSize: 16,
    },
    addButtonContainer: {
        flex: 1,
        margin: 10,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        paddingVertical: 20,
    },
    addIcon: {
        fontSize: 40,
        color: '#007BFF',
    },
    homeButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        fontSize: 40,
        borderRadius: 3,
        borderWidth: 1,
    },
    homeView: {
        marginLeft: 90,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default styles;