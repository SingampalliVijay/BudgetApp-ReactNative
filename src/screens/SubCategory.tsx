import { FlatList, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { addSubcategory } from '../redux/BudgetAction';
import styles from '../styles/SubCategory';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const SubCategory = ({ route }: any) => {
  const { category } = route.params;
  const categories = useSelector((state: any) => state.budget.categories);
  const selectedCategory = categories.find((cat: any) => cat.name === category);
  const subcategory = selectedCategory ? selectedCategory.subcategories : [];
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(false);
  const [isSearch, setIsSearch] = useState(false)
  const [isFocused, setIsFocused] = useState(false);
  const id = subcategory.length ? Math.max(...subcategory.map((sub: any) => sub.id)) + 1 : 1;

  const searchSubcategory = subcategory.filter((cat: any) =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const onSubmit = () => {
    setVisible(false);
    dispatch(addSubcategory(id, name, category));
    setName('');
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
            <Text style={styles.main}>{category} Subcategories  </Text>
            <Text style={styles.length}>{searchSubcategory.length}</Text>
          </View>
        )}
        {!isSearch && (
        <TouchableOpacity onPress={() => setIsSearch(true)} style={styles.searchButton}>
          <Icon name='search' size={20} style={styles.searchIcon} />
        </TouchableOpacity>
        )}
      </View>
      <Modal
        animationType="fade"
        visible={visible}
        transparent
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Add SubCategory</Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Icon name='close-circle-outline' style={styles.modalIcon} />
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              placeholder={'Enter subcategory'}
              value={name}
            />
            <Pressable style={styles.button} onPress={onSubmit}>
              <Text style={styles.submit}>Add</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={{ flex: 1 }}>
        <FlatList
          data={searchSubcategory}
          style={styles.list}
          renderItem={({ item }) => (
            <View style={[styles.listItem]}>
              <Text style={styles.itemText}>{item.name}</Text>
              {item.amount > 0 && (
                <View style={styles.amount}>
                  <MaterialIcon name='currency-rupee' style={styles.icon} />
                  <Text style={styles.amountText}>{item.amount}</Text>
                </View>
              )}
            </View>
          )}
        />
        <TouchableOpacity onPress={() => setVisible(true)} style={styles.addButton}>
          <Icon name="add-circle-outline" style={styles.addIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SubCategory;
