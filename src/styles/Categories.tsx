import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#CEDF9F'
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 20,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  listItem: {
    backgroundColor: 'white',
    marginVertical: 8,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  itemText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 20
  },
  addIcon: {
    color: '#1E3E62',
    fontSize: 50,
  },
  input: {
    borderRadius: 10,
    borderWidth: 0.7,
    marginVertical: 10,
    backgroundColor: '#FFF',
    margin: 20,
    marginBottom: 15,
    paddingLeft: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    marginLeft: 70,
    borderRadius: 7,
    padding: 10,
    width: '60%',
    backgroundColor: '#2196F3',
  },
  submit: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  modalView: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: '80%',
    height: 220,
    backgroundColor: 'white',
  },
  modalText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },
  modalIcon: {
    fontSize: 30,
    marginLeft: 120,
    color: 'black'
  },
  modalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FAF7F0',
    height: 60,
    borderColor: 'gray',
    borderWidth: 0.4,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  main: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
    marginLeft: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    padding: 5,
  },
  searchIcon: {
    color: '#333',
  },
  closeIcon: {
    marginLeft: 10,
  },
  octiIcon: {
    marginRight: 8,
  },
});

export default styles;
