import { Alert, FlatList, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { addSubcategory } from '../redux/BudgetAction'
import styles from '../styles/SubCategory'

const SubCategory = ({ route  , navigation}: any) => {
  const { category } = route.params;
  const categories = useSelector((state: any) => state.budget.categories);
  const selectedCategory = categories.find((cat: any) => cat.category === category);
  const subcategories = selectedCategory ? selectedCategory.subcategories : [];
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);

  console.log('Subcategoies list --->',categories)
  const onSubmit = () => {
    setVisible(false);
    dispatch(addSubcategory(name, category));
    setName('');
  };

  const handleSubcategoryPress = (subcategory: string) => {
    navigation.navigate('SubCategoryItemList', { subcategory });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.main}>{category} Subcategories</Text>
      <Modal
        animationType="fade"
        visible={visible}
        transparent
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.centeredView}>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            placeholder={`Enter subcategory for ${category}`}
            value={name}
          />
          <Pressable style={[styles.button, styles.buttonClose]} onPress={onSubmit}>
            <Text style={styles.submit}>Submit</Text>
          </Pressable>
        </View>
      </Modal>
      <View style={{ flex: 1 }}>
        <FlatList
          data={subcategories}
          style={styles.list}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              {/* <TouchableOpacity onPress={() => Alert.alert('Clicked On SubCategory')}>
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity> */}
              <TouchableOpacity onPress={() => handleSubcategoryPress(item)}>
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
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
