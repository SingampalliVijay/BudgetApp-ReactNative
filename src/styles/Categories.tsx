import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#CEDF9F'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '90%',
    marginLeft: 20,
    marginTop: 30

  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 20,
  },
  main: {
    fontSize: 25,
    color: '#03346E',
    fontWeight: 'bold',
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
    padding: 12,
    marginVertical: 10,
    backgroundColor: '#FFF',
    margin: 10,
    marginBottom: 15
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
    height: 200,
    backgroundColor: 'white',
  },
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    backgroundColor: '#FAF7F0',
    height:60,
    borderColor:'gray',
    borderWidth:0.4
  },
  octiIcon:{
    color:'#03346E',
    margin:10
  },
  modalText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    marginLeft: 15,
  },
  modalIcon: {
    fontSize: 30,
    marginLeft: 120
  },
  isSearch: {
    fontSize: 30,
    paddingLeft: 50,
    marginLeft: 150,
    color: '#03346E'
  },
  modalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginBottom: 0,
  },
  modalinput: {
    borderRadius: 10,
    borderWidth: 0.7,
    padding: 12,
    backgroundColor: '#FFF',
    margin: 10,
    width:'85%',
    marginLeft:30,
    marginBottom: 15
  },
});

export default styles;
