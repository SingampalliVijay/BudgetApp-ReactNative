import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E5D9F2'
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
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
    fontWeight: '600',
    color:'black',
    marginLeft: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth:0.6,
    borderRadius:7,
    flex: 1,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
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
    marginRight: 10,
  },
  octiIcon: {
    marginRight: 8,
  },
  list: {
    flex: 1,
    marginTop: 20,
    margin: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    marginVertical: 6,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    margin: 15,
    marginLeft: 30
  },
  amount: {
    flexDirection: 'row',
    position: 'absolute',
    right: 30
  },
  amountText: {
    color: 'green',
    fontSize: 25,
    fontWeight: '400',
    padding: 10,
  },
  icon: {
    fontSize: 20,
    color: '#333',
    padding: 10,
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
  input: {
    borderRadius: 10,
    borderWidth: 0.7,
    padding: 15,
    margin: 10,
    marginVertical: 10,
    backgroundColor: '#FFF',
    width: '85%',
    marginLeft: 25
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
    margin: 10,
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
  modalText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    marginLeft: 10,
  },
  modalIcon: {
    fontSize: 30,
    marginLeft: 80,
    color: 'black'
  },
});

export default styles;
