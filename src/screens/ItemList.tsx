import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatList } from 'react-native-gesture-handler'

const ItemList = ({ navigation }: any) => {
    const [items, setItems] = useState<string[]>(['Item1']);

    const renderToHome = () => {
        navigation.navigate('Category')
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <Text style={styles.mainText}>Item List</Text>
            <FlatList
                data={[...items]}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text>{item}</Text>
                    </View>
                )}
            />
            <View style={styles.homeView}>
                <TouchableOpacity>
                    <Icon name='add-circle-outline' style={styles.button} />
                </TouchableOpacity>
                <TouchableOpacity onPress={renderToHome}>
                    <Icon name="home" style={styles.button} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ItemList

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: '#F5F5F7'
    },
    mainText: {
        fontSize: 20,
        color: '#4379F2',
        textAlign: 'center',
        margin: 30
    },
    button: {
        fontSize: 40,
        color:'#16325B'
    },
    homeView: {
        position: 'absolute',
        bottom: 15,
        left: 20,
        margin: 10,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width:'90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 2,
    },
    itemContainer: {
        flex: 1,
        margin: 10,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
})