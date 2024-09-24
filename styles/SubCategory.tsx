import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor:'#E5D9F2'
  },
  main: {
    marginTop:30,
    fontSize: 25,
    color: '#4F75FF',
    fontWeight: '900',
    textAlign: 'center',
  },
  list: {
    flex: 1,
    marginTop: 20,
    margin:20,
  },
  listItem: {
    backgroundColor: '#FFE5CF',
    marginVertical: 6,
    padding: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    fontWeight:'500',
    color: 'black',
    textAlign:'center'
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    marginLeft:180
  },
  addIcon: {
    color:'green',
    fontSize: 50,
  },
  input: {
    borderRadius: 10,
    borderWidth: 0.7,
    width: '70%',
    padding: 12,
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
    borderRadius: 7,
    padding: 10,
    margin: 5,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  submit: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
