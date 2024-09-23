import { FlatList, ImageBackground, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/Categories'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const Categories = () => {
  const [data, setData] = useState<any>(['Transportation', 'Food']);
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);

  const addData = () => {
    setVisible(true);
  };

  const onSubmit = () => {
    setVisible(false);
    // if (name.trim()) {
    setData([...data, name]);
    setName('');
    // }
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
              data={data}
              style={styles.list}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <Text style={styles.itemText}>{item}</Text>
                  <MaterialIcon name="expand-more" style={styles.itemIcon} />
                </View>
              )}
            />
            <TouchableOpacity onPress={addData} style={styles.addButton}>
              <Icon name="add-circle-outline" style={styles.addIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Categories;
