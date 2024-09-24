import { Alert, FlatList, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/SubCategory'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { addSubcategory } from '../redux/BudgetAction'

const SubCategory = () => {
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const subcategories = useSelector((state: any) => state.budget.subcategoryList);
  const dispatch = useDispatch();

  const addData = () => {
    setVisible(true);
  };

  const onSubmit = () => {
    setVisible(false);
    dispatch(addSubcategory(name));
    setName('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.main}>SubCategory</Text>
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
            placeholder="   Enter Category"
            value={name}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={onSubmit}>
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
              <TouchableOpacity onPress={() => Alert.alert('Clicked On SubCategory')}>
                <Text style={styles.itemText}>{item.subcategory}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <TouchableOpacity onPress={addData} style={styles.addButton}>
          <Icon name="add-circle-outline" style={styles.addIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SubCategory;
