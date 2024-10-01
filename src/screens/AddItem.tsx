import { Alert, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import styles from '../styles/AddItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux';
import RadioButton from '../components/RadioButton';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { addAmountToSubcategory } from '../redux/BudgetAction';

const AddItem = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [date, setDate] = useState('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const categories = useSelector((state: any) => state.budget.categories);
    const dispatch = useDispatch();
    const [categoryValue, setCategoryValue] = useState('');
    const [subcategoryValue, setSubcategoryValue] = useState('');
    const [amount, setAmount] = useState('');

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

    // const handleAddItem = () => {
    //     if (categoryValue && subcategoryValue && amount) {
    //         console.log('Cateogry Value ',categoryValue)
    //         console.log('SubCategory Value ', subcategoryValue)
    //         console.log('Amount ==== ',amount)
    //         const parsedAmount = parseFloat(amount);
    //         if (!isNaN(parsedAmount)) {
    //             dispatch(addAmountToSubcategory(categoryValue, subcategoryValue, parsedAmount));
    //             setAmount('');
    //         }
    //         console.log("Did not enter amount");
    //     }
    // };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.title}>Add Your Expense Here</Text>
            </View>
            <View style={styles.card}>
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
                    <TextInput placeholder='Enter the Amount' value={amount} onChangeText={setAmount}/>
                </View>
                <Text style={styles.payment}>Payment Mode</Text>
                <View style={styles.radioButton}>
                    <RadioButton />
                </View>
                <Pressable
                    style={styles.button} onPress={() => Alert.alert('Expense added')} >
                    <Text style={styles.submit}>Add</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default AddItem
