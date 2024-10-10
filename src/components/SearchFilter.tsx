import { Alert, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Search';

const SearchFilter = ({ onFilter }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(false);

  const applyFilter = (filterType: string) => {
    Alert.alert('Clicked On Filter for ', filterType)
    setVisible(false);
    onFilter(filterType);
  };

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    onFilter({ type: 'search', query });
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
        <View style={styles.overlay}>
          <Modal
            animationType="fade"
            visible={visible}
            transparent
            onRequestClose={() => setVisible(false)}
          >
            <View style={styles.modalView}>
              <Pressable style={styles.modalOption} onPress={() => applyFilter('category')}>
                <Text style={styles.modalText}>Filter by Category</Text>
              </Pressable>
              <Pressable style={styles.modalOption} onPress={() => applyFilter('year')}>
                <Text style={styles.modalText}>Filter by Year</Text>
              </Pressable>
              <Pressable style={styles.modalOption} onPress={() => applyFilter('month')}>
                <Text style={styles.modalText}>Filter by Month</Text>
              </Pressable>
              <Pressable style={styles.modalOption} onPress={() => applyFilter('date')}>
                <Text style={styles.modalText}>Filter by Date</Text>
              </Pressable>
              <Pressable onPress={() => setVisible(false)} style={styles.closeButton}>
                <Icon name="close" size={20} style={styles.closeIcon} />
              </Pressable>
            </View>
          </Modal>
          <View>
            <TouchableOpacity onPress={() => setVisible(true)} >
              <Icon name='options-outline' size={20} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SearchFilter