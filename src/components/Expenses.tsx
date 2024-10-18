import { Alert, FlatList, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Expense';
import SearchFilter from './SearchFilter';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { deleteItem } from '../redux/BudgetAction';
const Expenses = ({ navigation }: any) => {
  const items = useSelector((state: any) => state.budget.items);
  const [refreshing, setRefreshing] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const handleFilter = (filter: any) => {
    let sortedItems = [...items];

    if (typeof filter === 'string') {
      sortedItems = items.filter((item: any) => item.category === filter);
    }
    else if (filter.type === 'subcategory') {
      sortedItems = items.filter((item: any) => item.subcategory === filter.subcat);
    }
    else if (filter.type === 'search') {
      sortedItems = items.filter((item: any) =>
        item.category.toLowerCase().includes(filter.query.toLowerCase()) ||
        item.subcategory.toLowerCase().includes(filter.query.toLowerCase())
      );
    }
    else if (filter.type === 'AllSubcategory') {
      sortedItems = items.filter((item: any) => item.category === filter.categoryId);
    }
    else if (filter.type === 'all') {
      sortedItems = [...items]
    }
    else if (filter.type === 'category') {
      if (filter.category) {
        sortedItems = items.filter((item: any) => filter.category.subcategories.includes(item.subcategory));
      } else {
        Alert.alert('No items for Seleted Category')
      }
    }
    else if (filter.type === 'subcategories') {
      if (filter.subcategory) {
        console.log('console',filter.subcategory )
        sortedItems = items.filter((item: any) => filter.subcategory.includes(item.subcategory));
      } else {
        Alert.alert('No items for Seleted Category')
      }
    }
    else {
      if (filter === 'category') {
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
      } else if (filter === 'year') {
        sortedItems.sort((a, b) => new Date(a.date).getFullYear() - new Date(b.date).getFullYear());
      } else if (filter === 'month') {
        sortedItems.sort((a, b) => new Date(a.date).getMonth() - new Date(b.date).getMonth());
      } else if (filter === 'date') {
        sortedItems.sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate());
      }
    }
    setFilteredItems(sortedItems);
    console.log('Filtered Items === ', filteredItems)
  };

  const handleItems = () => {
    navigation.navigate('AddItem')
  }

  const deleteExpense = (id: number) => {
    dispatch(deleteItem(id));
  }

  const handleItemsView = (expense: any) => {
    navigation.navigate('AddItem', { expense, mode: 'edit' })
  }

  const handleRefresh = () => {
    setRefreshing(true);
    setFilteredItems([...items])
    setRefreshing(false)
  };

  const handleOutsidePress = () => {
    if (filterModalVisible) {
      setFilterModalVisible(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Expenses List</Text>
        <SearchFilter onFilter={handleFilter} modalVisible={filterModalVisible} setModalVisible={setFilterModalVisible} />
        {items.length === 0 ? (
          <View style={styles.view}>
            <Text style={styles.itemList}>No items added yet</Text>
          </View>
        ) : (
          <FlatList
            data={filteredItems}
            style={styles.list}
            renderItem={({ item }: any) => (
              <View style={styles.itemContainer}>
                <View >
                  <TouchableOpacity onPress={() => handleItemsView(item)}>
                    <View style={styles.item}>
                      <Text style={styles.itemText}>ID: </Text>
                      <Text style={styles.categoryText}>{item.id} </Text>
                    </View>
                    <View style={styles.item}>
                      <Text style={styles.itemText}>Category: </Text>
                      <Text style={styles.categoryText}>{item.category} </Text>
                    </View>
                    <View style={styles.item}>
                      <Text style={styles.itemText}>SubCategory: </Text>
                      <Text style={styles.categoryText}>{item.subcategory} </Text>
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
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.deleteIconContainer} onPress={() => deleteExpense(item.id)}>
                  <MaterialIcon name='delete' size={30} style={styles.editIcon} />
                </TouchableOpacity>
              </View>
            )}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        )}
        <TouchableOpacity onPress={handleItems} style={styles.addButton}>
          <Icon name="add-circle-outline" style={[styles.addIcon]} />
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Expenses