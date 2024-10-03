import { FlatList, ImageBackground, Keyboard, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../redux/BudgetAction'
import styles from '../styles/Categories'

const Categories = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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
    navigation.navigate('SubCategory', { category: cat.name });
  };

  const handleScreenTouch = () => {
    setSearchQuery('');
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={require('../assets/budget.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.search}>
          <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Here..."
            value={searchQuery}
            onChangeText={handleSearch}
            placeholderTextColor="#ccc"
          />
        </View>
        <View style={styles.overlay}>
          <Text style={styles.main}>Categories</Text>
          <Modal
            animationType="fade"
            visible={visible}
            transparent
            onRequestClose={() => setVisible(false)}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
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
                    {/* <Text style={styles.itemText}>{item.id}</Text> */}
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
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Categories;
