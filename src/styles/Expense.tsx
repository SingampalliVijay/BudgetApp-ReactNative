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
        color: '#001F3F',
        fontWeight: '600',
        marginBottom: 8,
    },
    item: {
        flexDirection: 'row',
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
    editIconContainer: {
        position: 'absolute',  
        top: 20,              
        right: 20,           
    },
    deleteIconContainer: {
        position: 'absolute',  
        top: 70,              
        right: 20,           
    },
    editIcon: {
        color: '#000',
        marginBottom:10         
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      },
      // Modal View Box
      modalView: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      // Modal Title
      modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
      },
      // Input Fields
      input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
      },
      // Save Button
      saveButton: {
        width: '100%',
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      saveButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },

})

export default styles;