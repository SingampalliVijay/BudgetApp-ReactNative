import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  main: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  listItem: {
    backgroundColor: '#CB80AB',
    marginVertical: 8,
    padding: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#FFF',
    textAlign:'center'
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right:20
  },
  addIcon: {
    color:'white',
    fontSize: 50,
  },
  input: {
    borderRadius: 10,
    borderWidth: 0.7,
    padding: 12,
    marginVertical: 10,
    backgroundColor: '#FFF',
    margin:10,
    marginBottom:20
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    marginLeft:50,
    borderRadius: 7,
    padding: 10,
    width:'60%',
    backgroundColor: '#2196F3',
  },
  submit: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  modalView:{
    padding:15,
    borderRadius:10,
    borderWidth:1,
    borderColor:'white',
    width:'80%',
    height:170,
    backgroundColor:'white'

  }
});

export default styles;
