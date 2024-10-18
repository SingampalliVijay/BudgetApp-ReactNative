import { Alert, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/Profile'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const Profile = ({ navigation, route }: any) => {
  // const [name, setName] = useState('')
  const [visible, setVisible] = useState(false);
  const { profile } = route.params || '';

  const handleAbout = () => {
    setVisible(true)
  }

  const handleUpdate = () => {
    Alert.alert('Update')
    navigation.navigate('UpdateProfile')
  }

  const handleSettings = () => {
    Alert.alert('Settings')
    navigation.navigate('Settings')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.titleView}>
        <Text style={styles.title}>User Profile</Text>
      </View>
      <Modal
        animationType="fade"
        visible={visible}
        transparent
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Money Manager makes managing personal finances as easy as pie!
              Now easily record your personal and business financial transactions,
              generate spending reports, review your daily, weekly and monthly financial data and
              manage your assets with Money Manager's spending tracker and budget planner.
            </Text>
            <View>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Icon name='close-circle-outline' style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.profileView}>
        <FontAwesome name='user-circle' size={90} style={styles.user} />
        {/* <Text>{name}</Text> */}
        <TextInput
          placeholder='Enter Your Name Here'
          multiline
          value={profile ? profile.name : ''}
          style={styles.name}
          editable={false}
        />
        <View>
          <TouchableOpacity onPress={handleSettings} >
            <Icon name='settings' size={30} style={styles.settingIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleUpdate} >
            <MaterialIcon name='edit' size={30} style={styles.editIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleAbout}>
        <View style={styles.aboutView}>
          <FontAwesome name='comment-o' size={25} style={styles.aboutIcon} />
          <Text style={styles.about}>About App</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile