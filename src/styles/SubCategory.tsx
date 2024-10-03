import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E5D9F2'
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '90%',
    marginLeft:20
},
searchIcon: {
    marginRight: 10,
},
searchInput: {
    flex: 1,
    height: 40,
    color: '#000',
},
  main: {
    // marginTop: 30,
    fontSize: 25,
    color: '#4F75FF',
    fontWeight: '900',
    textAlign: 'center',
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
    backgroundColor: '#FFE5CF',
    marginVertical: 6,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    marginLeft: 50,
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
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: '80%',
    height: 170,
    backgroundColor: 'white'
  }
});

export default styles;
