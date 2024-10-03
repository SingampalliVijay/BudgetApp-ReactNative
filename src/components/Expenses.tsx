import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux';
import styles from '../styles/Expense';
import SearchFilter from './SearchFilter';
import Icon from 'react-native-vector-icons/Ionicons';

const Expenses = ({ navigation }: any) => {
  const items = useSelector((state: any) => state.budget.items);

  const handleItems = () => {
    navigation.navigate('AddItem')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Expenses List</Text>
      <SearchFilter />
      {items.length === 0 ? (
        <View style={styles.view}>
          <Text style={styles.itemList}>No items added yet</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          renderItem={({ item }: any) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>Category: {item.categoryId}</Text>
              <Text style={styles.itemText}>Subcategory: {item.subcategoryId}</Text>
              <Text style={styles.itemText}>Amount: {item.amount}</Text>
              <Text style={styles.itemText}>Date: {item.date}</Text>
              <Text style={styles.itemText}>Payment Mode: {item.paymentMode}</Text>
              <Text style={styles.itemText}>Notes: {item.notes}</Text>
            </View>
          )}
          style={styles.list}
        />
      )}

      <TouchableOpacity onPress={handleItems} style={styles.addButton}>
        <Icon name="add-circle-outline" style={[styles.addIcon]} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Expenses