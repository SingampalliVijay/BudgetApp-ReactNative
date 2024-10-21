import { FlatList, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../redux/BudgetAction'
import styles from '../styles/Categories'
import OctiIcon from 'react-native-vector-icons/Octicons'

const Categories = ({ navigation, route }: any) => {
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const categories = useSelector((state: any) => state.budget.categories);
  const dispatch = useDispatch();
  const id = categories.length ? Math.max(...categories.map((cat: any) => cat.id)) + 1 : 1;

  const searchCategory = categories.filter((cat: any) =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // console.log('categories --->', categories)
  console.log('Categories ---> ', JSON.stringify(categories))
  const onSubmit = () => {
    setVisible(false);
    console.log('Data ---> ', name)
    dispatch(addCategory(id, name));
    setName('');
  };

  const handleCategory = (cat: any) => {
    setIsSearch(false)
    setSearchQuery('');
    navigation.navigate('SubCategory', { category: cat.name });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.toolbar}>
        {isSearch ? (
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search Here..."
              value={searchQuery}
              onChangeText={handleSearch}
              placeholderTextColor="#ccc"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {isFocused && (
              <TouchableOpacity onPress={() => { setIsSearch(false); setSearchQuery(''); }}>
                <Icon name="close" size={20} color="#000" style={styles.closeIcon} />
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <View style={styles.titleContainer}>
            <OctiIcon name='file-directory' size={20} style={styles.octiIcon} />
            <Text style={styles.main}>Categories</Text>
          </View>
        )}
        <TouchableOpacity onPress={() => setIsSearch(true)} style={styles.searchButton}>
          <Icon name='search' size={20} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.overlay}>
        <Modal
          animationType="fade"
          visible={visible}
          transparent
          onRequestClose={() => setVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalText}>Add Category</Text>
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <Icon name='close-circle-outline' style={styles.modalIcon} />
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.input}
                onChangeText={setName}
                placeholder="   Enter new Category"
                value={name}
              />
              <Pressable
                style={styles.button}
                onPress={onSubmit}>
                <Text style={styles.submit}>Add</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={{ flex: 1 }}>
          <FlatList
            data={searchCategory}
            style={styles.list}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleCategory(item)}>
                <View style={styles.listItem}>
                  <Text style={styles.itemText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={() => setVisible(true)} style={styles.addButton}>
            <Icon name="add-circle-outline" style={styles.addIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
  );
};

export default Categories;
