import { FlatList, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { addSubcategory } from '../redux/BudgetAction';
import styles from '../styles/SubCategory';

const SubCategory = ({ route, navigation }: any) => {
  const { category } = route.params;
  const categories = useSelector((state: any) => state.budget.categories);
  const selectedCategory = categories.find((cat: any) => cat.name === category);
  const subcategory = selectedCategory ? selectedCategory.subcategories : [];
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);

  const id = subcategory.length ? Math.max(...subcategory.map((sub: any) => sub.id)) + 1 : 1;

  console.log('Subcategories list --->', subcategory);

  const onSubmit = () => {
    setVisible(false);
    // console.log('OnSubmit Name ---> [subCategory :', name + ', Category  :' + category + ' ]');
    dispatch(addSubcategory(id, name, category));
    setName('');
  };

  const handleSubcategoryPress = (subcategoryName: string) => {
    navigation.navigate('SubCategoryItemList', { subcategory: subcategoryName });
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
            placeholder={'Enter subcategory'}
            value={name}
          />
          <Pressable style={styles.button} onPress={onSubmit}>
            <Text style={styles.submit}>Submit</Text>
          </Pressable>
        </View>
      </Modal>
      <View style={{ flex: 1 }}>
        <FlatList
          data={subcategory}
          style={styles.list}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <TouchableOpacity onPress={() => handleSubcategoryPress(item.name)}>
                <Text style={styles.itemText}>{item.name}</Text>
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
