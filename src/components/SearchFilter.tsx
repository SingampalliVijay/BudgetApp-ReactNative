import { Alert, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Search';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(false);
  // const [selectedFilter, setSelectedFilter] = useState('');

  const applyFilter = () => {
    setVisible(true);
  };
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // const applyFilter = () => {
  //   Alert.alert('Apply Filter')
  // }

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
        <View style={styles.overlay}>
          <Modal
            animationType="fade"
            visible={visible}
            transparent
            onRequestClose={() => setVisible(false)}
          >
            <View style={styles.modalView}>
              <Pressable style={styles.modalOption}>
                <Text style={styles.modalText}>Filter by Category</Text>
              </Pressable>
              <Pressable style={styles.modalOption}>
                <Text style={styles.modalText}>Filter by Year</Text>
              </Pressable>
              <Pressable style={styles.modalOption}>
                <Text style={styles.modalText}>Filter by Month</Text>
              </Pressable>
              <Pressable style={styles.modalOption}>
                <Text style={styles.modalText}>Filter by Date</Text>
              </Pressable>
              <Pressable onPress={() => setVisible(false)} style={styles.closeButton}>
                <Icon name="close" size={20} style={styles.closeIcon} />
              </Pressable>
            </View>
          </Modal>
          <View>
            <TouchableOpacity onPress={() => setVisible(true)} >
              <MaterialIcon name='sort' size={20} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SearchFilter