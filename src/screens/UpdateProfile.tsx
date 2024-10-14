import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/UpdateProfile'

const UpdateProfile = ({ navigation }: any) => {
    const [name, setName] = useState('')

    const handleProfile = (profile: any) => {
        navigation.navigate('Profile', { profile })
    }
    return (
        <SafeAreaView>
            <View>
                <Text>UpdateProfile</Text>
            </View>
            <View>
                <Text style={styles.name}> Enter Full Name</Text>
                <TextInput
                    style={styles.nameField}
                    placeholder='Enter Your FullName'
                    multiline
                    onChangeText={setName}
                    value={name} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => handleProfile({ name })}>
                <Text style={styles.submit}>ADD</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default UpdateProfile