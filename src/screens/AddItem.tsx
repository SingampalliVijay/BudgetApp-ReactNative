import { Alert, FlatList, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import styles from '../styles/AddItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux';
import RadioButton from '../components/RadioButton';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { addAmountToSubcategory, addItem } from '../redux/BudgetAction';
import SearchFilter from '../components/SearchFilter';

const AddItem = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [date, setDate] = useState('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const categories = useSelector((state: any) => state.budget.categories);
    const dispatch = useDispatch();
    const [categoryValue, setCategoryValue] = useState('');
    const [subcategoryValue, setSubcategoryValue] = useState('');
    const [amount, setAmount] = useState('');
    const [isCard, setIsCard] = useState(false)
    const items = useSelector((state: any) => state.budget.items);
    console.log('Itemsssss', JSON.stringify(categories))

    let categoryCount = []
    for (var i = 0; i < categories.length; i++) {
        categoryCount.push({
            value: categories[i].id,
            label: categories[i].name
        })
    }

    let subcategory = [];
    const selectedCategory = categories.find((cat: any) => cat.id === categoryValue);
    if (selectedCategory && selectedCategory.subcategories) {
        for (let i = 0; i < selectedCategory.subcategories.length; i++) {
            subcategory.push({
                value: selectedCategory.subcategories[i].id,
                label: selectedCategory.subcategories[i].name
            });
        }
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        setDate(date.toDateString());
        hideDatePicker();
    };

    const handleAddItem = () => {
        setIsCard(false);
        if (categoryValue && subcategoryValue && amount) {
            // console.log('Cateogry Value ', categoryValue)
            // console.log('SubCategory Value ', subcategoryValue)
            // console.log('Amount ==== ', amount)
            const addAmount = parseFloat(amount);
            dispatch(addAmountToSubcategory(categoryValue, subcategoryValue, addAmount));
            setAmount('');
        }

        const newItem = {
            category: categoryValue,
            subcategory: subcategoryValue,
            amount: parseFloat(amount),
            date: date.toString(),
        };
        dispatch(addItem(newItem.category, newItem.subcategory, newItem.amount, newItem.date));
        console.log('Adding Items ', newItem)
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={isCard ? { opacity: 0.3 } : {}}>
                <SearchFilter />
                <Text style={styles.title}>Expenses List</Text>
            </View>
            {/* {items.length === 0 ? (
                <Text>No items added yet</Text>
            ) : ( */}
            <FlatList
                data={items}
                renderItem={({ item }: any) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>Category: {item.category}</Text>
                        <Text style={styles.itemText}>Subcategory: {item.subcategory}</Text>
                        <Text style={styles.itemText}>Amount: {item.amount}</Text>
                        <Text style={styles.itemText}>Date: {item.date}</Text>
                    </View>
                )}
                style={styles.list}
            />
            {/* )} */}
            {isCard && (
                <View style={[styles.card, styles.overlayCard]}>
                    <View style={styles.dropdownView}>
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            data={categoryCount}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select Category' : '...'}
                            searchPlaceholder="Search..."
                            value={categoryValue}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setCategoryValue(item.value);
                                setIsFocus(false);
                            }}
                        />
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            data={subcategory}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select SubCategory' : '...'}
                            searchPlaceholder="Search..."
                            value={subcategoryValue}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setSubcategoryValue(item.value);
                                setIsFocus(false);
                            }}
                        />
                    </View>
                    <Text style={styles.date}>Date of Issue</Text>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                    <View style={styles.dateOfBirthContainer}>
                        <TextInput
                            style={[styles.dob, { flex: 1 }]}
                            placeholder='YYYY/MM/DD'
                            editable={false}
                            value={date} />
                        <TouchableOpacity onPress={showDatePicker} >
                            <Icon name='calendar-outline' style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.amount}>Amount</Text>
                    <View style={styles.dateOfBirthContainer}>
                        <MaterialIcon name='currency-rupee' style={styles.icon} />
                        <TextInput placeholder='Enter the Amount' value={amount} onChangeText={setAmount} />
                    </View>
                    <Text style={styles.payment}>Payment Mode</Text>
                    <View style={styles.radioButton}>
                        <RadioButton />
                    </View>
                    <Text> Notes </Text>
                    <View style={styles.notes}>
                        <TextInput multiline placeholder='Enter Details if Needed' style={styles.notesText} />
                    </View>
                    <Pressable
                        style={styles.button} onPress={handleAddItem} >
                        <Text style={styles.submit}>Add</Text>
                    </Pressable>
                </View>
            )}
            <TouchableOpacity onPress={() => setIsCard(true)} style={styles.addButton}>
                <Icon name="add-circle-outline" style={[styles.addIcon, { opacity: isCard ? 0.3 : 1 }]} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default AddItem
