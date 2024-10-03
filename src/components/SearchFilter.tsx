import { Alert, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Search';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const applyFilter = () => {
    Alert.alert('Apply Filter')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search Here..."
          value={searchQuery}
          onChangeText={handleSearch}
          placeholderTextColor="#ccc"
        />
        <View>
          <TouchableOpacity onPress={() => setModalVisible(true)} >
            <MaterialIcon name='sort' size={20} color={'black'} onPress={applyFilter} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SearchFilter