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
