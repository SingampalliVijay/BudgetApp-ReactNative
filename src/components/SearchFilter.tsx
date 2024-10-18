import { Alert, FlatList, Modal, Pressable, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Search';
import { useSelector } from 'react-redux';
import CheckBox from 'react-native-check-box'
import { Dropdown } from 'react-native-element-dropdown';

const SearchFilter = ({ onFilter, modalVisible, setModalVisible }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [subcategoryModalVisible, setSubcategoryModalVisible] = useState(false);
  const [categorySearchQuery, setCategorySearchQuery] = useState('');
  const [subcategorySearchQuery, setSubcategorySearchQuery] = useState('');
  const categories = useSelector((state: any) => state.budget.categories);
  const [selectedCategory, setSelectedCategory] = useState<any>([])
  const [selectedSubcategory, setSelectedSubcategory] = useState<any>([]);
  const [categoryValue, setCategoryValue] = useState('');
  const [categoryName, setCategoryName] = useState('');

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
    setSelectedCategory([]);
    setCategorySearchQuery('');
  }

  const openSubcategoryModal = () => {
    setSubcategoryModalVisible(true);
    closeFilterModal();
  };

  const closeSubcategoryModal = () => {
    setSubcategoryModalVisible(false);
    setCategoryValue('')
    setSelectedSubcategory([])
  };

  const applySortFilter = (filterType: string) => {
    closeModal();
    onFilter(filterType);
  };

  const applyFilter = (filterType: string) => {
    closeFilterModal();
    setSelectedCategory([]);
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

  const applyCheckBox = (category: any) => {
    if (category.name === 'All') {
      if (selectedCategory.length === categories.length) {
        setSelectedCategory([]);
      } else {
        setSelectedCategory(categories.map((cat: any) => cat.name));
      }
    } else {
      if (selectedCategory.includes(category.name)) {
        setSelectedCategory(selectedCategory.filter((cat: any) => cat !== category.name));
      } else {
        setSelectedCategory([...selectedCategory, category.name]);
      }
    }
  };

  let categoryList = [];
  for (var i = 0; i < categories.length; i++) {
    categoryList.push({
      value: categories[i].id,
      label: categories[i].name
    });
  }

  let subcategory = [];
  const selectedCat = categories.find((cat: any) => cat.id === categoryValue);
  if (selectedCat && selectedCat.subcategories) {
    for (let i = 0; i < selectedCat.subcategories.length; i++) {
      subcategory.push(
        selectedCat.subcategories[i].name
      );
    }
  }

  let searchSubcategory = [];
  if (subcategory.length > 0) {
    searchSubcategory = subcategorySearchQuery ? subcategory.filter((cat: any) =>
      cat.toLowerCase().includes(subcategorySearchQuery.toLowerCase())) :
      ['All', ...subcategory];
  }

  const applySubCategoryFilter = (filterType: string) => {
    closeSubcategoryModal();
    if (filterType === 'All') {
      onFilter({ type: 'AllSubcategory', allsubcat: filterType, categoryId: categoryName })
    } else {
      onFilter({ type: 'subcategory', subcat: filterType });
    }
  };

  const applySelectedCategories = () => {
    if (selectedCategory.length > 0) {
      onFilter({ type: 'category', category: selectedCategory });
      setCategoryModalVisible(false);
      setSelectedCategory([]);
    } else {
      Alert.alert('No Category Selected', 'Please select a category.');
    }
  };

  const handleSubcategorySearch = (query: string) => {
    setSubcategorySearchQuery(query);
  };

  const applySelectedSubcategories = () => {
    console.log('Selected SubCategory', selectedCategory)
    if (selectedSubcategory.length > 0) {
      onFilter({ type: 'subcategories', subcategory: selectedSubcategory });
      setSubcategoryModalVisible(false);
      setCategoryValue('')
      setSelectedSubcategory([])
    } else {
      Alert.alert('No Subcategory Selected', 'Please select a subcategory.');
    }
  };

  const handleSubCategories = (subcategory: string) => {
    if (subcategory === 'All') {
      if (selectedSubcategory.length === searchSubcategory.length) {
        setSelectedSubcategory([]);
      } else {
        setSelectedSubcategory(searchSubcategory.map((subCat: any) => subCat));
      }
    }
    else {
      if (selectedSubcategory.includes(subcategory)) {
        setSelectedSubcategory(selectedSubcategory.filter((sub: string) => sub !== subcategory));
      } else {
        setSelectedSubcategory([...selectedSubcategory, subcategory]);
      }
    }
    console.log('Selected SubCateogry ', selectedSubcategory)
  };

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
              <Pressable style={styles.modalOption} onPress={openSubcategoryModal}>
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
              <View style={{ flexDirection: 'row' }}>
                <FlatList
                  data={searchCategory}
                  renderItem={({ item }) => (
                    <View>
                      <Pressable
                        style={styles.modalOption}
                        onPress={() => {
                          applyFilter(item.name);
                          closeCategoryModal();
                        }}
                      >
                        <Text style={styles.modalText}>{item.name}</Text>
                      </Pressable>
                      <CheckBox
                        isChecked={item.name === 'All' ? selectedCategory.length === categories.length : selectedCategory.includes(item.name)}
                        onClick={() => applyCheckBox(item)}
                        style={styles.checkbox}
                        checkBoxColor='green'
                      />
                    </View>
                  )}
                  ListEmptyComponent={() => (
                    <View style={styles.noExpenseContainer}>
                      <Text style={styles.noExpenseText}>No Category Found</Text>
                    </View>
                  )}
                />
              </View>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={applySelectedCategories}
              >
                <Text style={styles.applyButtonText}>Apply Filters</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal
        animationType="fade"
        visible={subcategoryModalVisible}
        transparent
        onRequestClose={closeSubcategoryModal}
      >
        <TouchableWithoutFeedback onPress={closeSubcategoryModal}>
          <View style={styles.modalOverlayCat}>
            <View style={styles.modalViewCat}>
              <View style={styles.searchCat}>
                <TextInput
                  style={styles.input}
                  placeholder="Search Subcategory..."
                  value={subcategorySearchQuery}
                  onChangeText={handleSubcategorySearch}
                />
              </View>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={categoryList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select Category"
                searchPlaceholder="Search..."
                value={categoryValue}
                onChange={item => {
                  setCategoryValue(item.value);
                  setCategoryName(item.label)
                }}
              />
              <View style={{ flexDirection: 'row' }}>
                <FlatList
                  data={searchSubcategory}
                  renderItem={({ item }) => (
                    <View>
                      <Pressable
                        style={styles.modalOption}
                        onPress={() => {
                          applySubCategoryFilter(item);
                          closeSubcategoryModal()
                        }}
                      >
                        <Text style={styles.modalText}>{item}</Text>
                      </Pressable>
                      <CheckBox
                        isChecked={
                          item === 'All'
                            ? selectedSubcategory.length === searchSubcategory.length
                            : selectedSubcategory.includes(item)
                        }
                        onClick={() => handleSubCategories(item)}
                        style={styles.checkbox}
                        checkBoxColor='green'
                      />
                    </View>
                  )}
                />
              </View>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={applySelectedSubcategories}
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
