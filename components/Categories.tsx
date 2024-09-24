import { FlatList, ImageBackground, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/Categories'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../redux/BudgetAction'

const Categories = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const categories = useSelector((state: any) => state.budget.categoryList);
  const dispatch = useDispatch();

  console.log('Categories ', categories)

  const onSubmit = () => {
    setVisible(false);
    console.log('Data ---> ', name)
    dispatch(addCategory(name));
    setName('');
  };

  const handleProducts = (category: any) => {
    navigation.navigate('SubCategory', { category })
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={require('../assets/budget.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.main}>Categories</Text>
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
                placeholder="   Enter new Category"
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
              data={categories}
              style={styles.list}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleProducts(item)}>
                  <View style={styles.listItem}>
                    <Text style={styles.itemText}>{item.category}</Text>
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
