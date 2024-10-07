import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Expense';
import SearchFilter from './SearchFilter';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { deleteItem } from '../redux/BudgetAction';
const Expenses = ({ navigation }: any) => {
  const items = useSelector((state: any) => state.budget.items);
  const dispatch = useDispatch();


  const handleItems = () => {
    navigation.navigate('AddItem')
  }

  const deleteExpense = (id: number) => {
    dispatch(deleteItem(id));
  }

  const saveEdit = () => {
    Alert.alert('Clicked on Edit Item')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Expenses List</Text>
      <SearchFilter />
      {/* <SearchFilter onFilter={handleFilter} /> */}
      {items.length === 0 ? (
        <View style={styles.view}>
          <Text style={styles.itemList}>No items added yet</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          renderItem={({ item }: any) => (
            <View style={styles.itemContainer}>
              <TouchableOpacity style={styles.editIconContainer} onPress={() => saveEdit()}>
                <AntIcon name='edit' size={30} style={styles.editIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteIconContainer} onPress={() => deleteExpense(item.id)}>
                <MaterialIcon name='delete' size={30} style={styles.editIcon} />
              </TouchableOpacity>
              <View style={styles.item}>
                <Text style={styles.itemText}>ID: </Text>
                <Text style={styles.categoryText}>{item.id} </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.itemText}>Category: </Text>
                <Text style={styles.categoryText}>{item.categoryId} </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.itemText}>SubCategory: </Text>
                <Text style={styles.categoryText}>{item.subcategoryId} </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.itemText}>Amount: </Text>
                <Text style={styles.categoryText}>{item.amount} </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.itemText}>Date: </Text>
                <Text style={styles.categoryText}>{item.date} </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.itemText}>PaymentMode: </Text>
                <Text style={styles.categoryText}>{item.paymentMode} </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.itemText}>Notes: </Text>
                <Text style={styles.categoryText}>{item.notes} </Text>
              </View>
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