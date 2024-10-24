import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    slider: {
        marginHorizontal: 20,
        marginTop: 10,
        height:40,
        width:'100%',
        paddingTop:10,
        marginLeft:0
    },
    thumb: {
        width: 15,
        height: 15,
        backgroundColor: '#007aff',
        borderRadius: 10,
    },
    rail: {
        flex: 1,
        height: 4,
        // backgroundColor: '#d3d3d3',
        backgroundColor:'gray',
        borderRadius: 2,
    },
    railSelected: {
        height: 4,
        backgroundColor: '#007aff',
        borderRadius: 2,
    },
    label: {
        fontSize: 12,
        color: 'black',
        padding: 5,
    },
    notch: {
        width: 10,
        height: 10,
        backgroundColor: 'red',
    },
    text:{
        color:'black',
        fontSize:20,
        marginTop:20
    },
    input: {
        height: 40,
        color: '#000',
    },
});

export default styles;