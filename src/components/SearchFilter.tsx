import { Alert, FlatList, Modal, Pressable, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Search';
import { useSelector } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';


const SearchFilter = ({ onFilter, modalVisible, setModalVisible }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [categorySearchQuery, setCategorySearchQuery] = useState('');
  const categories = useSelector((state: any) => state.budget.categories);
  // const [selectedCategories, setSelectedCategories] = useState<{ [key: string]: boolean }>({});

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const openFilterModal = () => setFilterModalVisible(true);
  const closeFilterModal = () => setFilterModalVisible(false);

  const openCategoryModal = () => {
    setCategoryModalVisible(true);
    closeFilterModal();
  };

  const closeCategoryModal = () => {
    setCategoryModalVisible(false);
  }

  const applySortFilter = (filterType: string) => {
    closeModal();
    onFilter(filterType);
  };

  const applyFilter = (filterType: string) => {
    closeFilterModal();
    setCategorySearchQuery('');
    if (filterType === 'All') {
      handleAllCategory();
    } else {
       onFilter(filterType);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onFilter({ type: 'search', query });
  };

  const searchCategory = categorySearchQuery ? categories.filter((cat: any) =>
    cat.name.toLowerCase().includes(categorySearchQuery.toLowerCase())
  ) : [{ name: 'All' }, ...categories];

  const handleCategorySearch = (query: string) => {
    setCategorySearchQuery(query);
  };

  const handleAllCategory = () => {
    closeCategoryModal()
    onFilter({ type: 'all' });
  }

  // const handleCategorySelection = (categoryName: string) => {
  //   setSelectedCategories((prevState) => ({
  //     ...prevState,
  //     [categoryName]: !prevState[categoryName],
  //   }));
  // };

  // const applySelectedCategories = () => {
  //   const selected = Object.keys(selectedCategories).filter(
  //     (key) => selectedCategories[key]
  //   );
  //   onFilter({ type: 'categories', selected });
  //   closeCategoryModal();
  // };

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
          <TouchableOpacity onPress={openModal}>
            <Icon name='options-outline' size={20} color={'black'} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openFilterModal}>
            <Icon name='filter' size={20} color={'black'} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="fade"
        visible={modalVisible}
        transparent
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalView}>
              <Pressable style={styles.modalOption} onPress={() => applySortFilter('category')}>
                <Text style={styles.modalText}>Sort by Category</Text>
              </Pressable>
              <Pressable style={styles.modalOption} onPress={() => applySortFilter('year')}>
                <Text style={styles.modalText}>Sort by Year</Text>
              </Pressable>
              <Pressable style={styles.modalOption} onPress={() => applySortFilter('month')}>
                <Text style={styles.modalText}>Sort by Month</Text>
              </Pressable>
              <Pressable style={styles.modalOption} onPress={() => applySortFilter('date')}>
                <Text style={styles.modalText}>Sort by Date</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        animationType="fade"
        visible={filterModalVisible}
        transparent
        onRequestClose={closeFilterModal}
      >
        <TouchableWithoutFeedback onPress={closeFilterModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalView}>
              <Pressable style={styles.modalOption} onPress={openCategoryModal}>
                <Text style={styles.modalText}>Category</Text>
              </Pressable>
              <Pressable style={styles.modalOption} onPress={() => Alert.alert('Subcategory')}>
                <Text style={styles.modalText}>Subcategory</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        animationType="fade"
        visible={categoryModalVisible}
        transparent
        onRequestClose={closeCategoryModal}
      >
        <TouchableWithoutFeedback onPress={closeCategoryModal}>
          <View style={styles.modalOverlayCat}>
            <View style={styles.modalViewCat}>
              <View style={styles.searchCat}>
                <TextInput
                  style={styles.input}
                  placeholder="Search Category..."
                  value={categorySearchQuery}
                  onChangeText={handleCategorySearch}
                />
              </View>
              <FlatList
                data={searchCategory}
                renderItem={({ item }) => (
                  <Pressable
                    style={styles.modalOption}
                    onPress={() => {
                      applyFilter(item.name);
                      closeCategoryModal();
                    }}
                  >
                  
                    <Text style={styles.modalText}>{item.name}</Text>
                  </Pressable>
                )}
                ListEmptyComponent={() => (
                  <View style={styles.noExpenseContainer}>
                    <Text style={styles.noExpenseText}>No expenses for selected category</Text>
                  </View>
                )}
              />
              <TouchableOpacity
                style={styles.applyButton}
                // onPress={applySelectedCategories}
              >
                <Text style={styles.applyButtonText}>Apply Filters</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default SearchFilter;
