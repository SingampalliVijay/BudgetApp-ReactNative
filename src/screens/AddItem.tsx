import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
import Toast from 'react-native-toast-message';

const AddItem = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [date, setDate] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const categories = useSelector((state: any) => state.budget.categories);
    const items = useSelector((state: any) => state.budget.items);
    const dispatch = useDispatch();
    const [categoryValue, setCategoryValue] = useState('');
    const [subcategoryValue, setSubcategoryValue] = useState('');
    const [amount, setAmount] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [subcategoryName, setSubCategoryName] = useState('');
    const [notes, setNotes] = useState('');
    const [paymentMode, setPaymentMode] = useState('');
    const [categoryVerify, setCategoryVerify] = useState(false);
    const [subCategoryVerify, setSubCategoryVerify] = useState(false);
    const [paymentModeVerify, setPaymentModeVerify] = useState(false);
    const [dateVerify, setDateVerify] = useState(false);
    const [amountVerify, setAmountVerify] = useState(false);

    const newid = items.length ? Math.max(...items.map((sub: any) => sub.id)) + 1 : 1;


    let categoryCount = [];
    for (var i = 0; i < categories.length; i++) {
        categoryCount.push({
            value: categories[i].id,
            label: categories[i].name
        });
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
        setDateVerify(false);
        hideDatePicker();
    };

    const validatingFields = () => {
        let isValid = true;

        if (!categoryValue) {
            setCategoryVerify(true);
            isValid = false;
        } else {
            setCategoryVerify(false);
        }

        if (!subcategoryValue) {
            setSubCategoryVerify(true);
            isValid = false;
        } else {
            setSubCategoryVerify(false);
        }

        if (!date) {
            setDateVerify(true);
            isValid = false;
        } else {
            setDateVerify(false);
        }

        if (!amount) {
            setAmountVerify(true);
            isValid = false;
        } else {
            setAmountVerify(false);
        }

        if (!paymentMode) {
            setPaymentModeVerify(true);
            isValid = false;
        } else {
            setPaymentModeVerify(false);
        }
        return isValid;
    };

    const handleAddItem = () => {
        if (validatingFields()) {
            // console.log('Cateogry Value ', categoryValue)
            // console.log('SubCategory Value ', subcategoryValue)
            // console.log('Amount ==== ', amount)
            // console.log('Payment ==== ', paymentMode)

            const addAmount = parseFloat(amount);
            dispatch(addAmountToSubcategory(categoryValue, subcategoryValue, addAmount));

            const newItem = {
                id: newid,
                category: categoryName,
                subcategory: subcategoryName,
                amount: addAmount,
                date: date.toString(),
                notes: notes,
                paymentMode: paymentMode,
            };

            dispatch(addItem(newItem.id, newItem.category, newItem.subcategory, newItem.amount, newItem.date, newItem.notes, newItem.paymentMode));

            Toast.show({
                type: 'success',
                text1: 'Item Added Successfully',
                position: 'bottom'
            });
            setCategoryValue('');
            setSubcategoryValue('');
            setAmount('');
            setDate('');
            setPaymentMode('');
            setNotes('');
        } else {
            Toast.show({
                type: 'error',
                text1: 'Please fill all the required fields',
                position: 'bottom'
            });
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
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
                            setCategoryName(item.label);
                            setIsFocus(false);
                        }}
                    />
                    {categoryVerify && <Text style={styles.error}>Select Category</Text>}

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
                            setSubCategoryName(item.label);
                            setIsFocus(false);
                        }}
                    />
                    {subCategoryVerify && <Text style={styles.error}>Select SubCategory</Text>}
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
                        value={date}
                    />
                    <TouchableOpacity onPress={showDatePicker}>
                        <Icon name='calendar-outline' style={styles.icon} />
                    </TouchableOpacity>
                </View>
                {dateVerify && <Text style={styles.error}>Select Date</Text>}

                <Text style={styles.amount}>Amount</Text>
                <View style={styles.dateOfBirthContainer}>
                    <MaterialIcon name='currency-rupee' style={styles.icon} />
                    <TextInput
                        placeholder='Enter the Amount'
                        value={amount}
                        onChangeText={setAmount}
                        keyboardType='numeric'
                    />
                </View>
                {amountVerify && <Text style={styles.error}>Enter Amount</Text>}

                <Text style={styles.payment}>Payment Mode</Text>
                <View style={styles.radioButton}>
                    <RadioButton setPaymentMode={setPaymentMode} />
                </View>
                {paymentModeVerify && <Text style={styles.error}>Select Payment Mode</Text>}

                <Text style={styles.notesField}>Notes</Text>
                <View style={styles.notes}>
                    <TextInput
                        multiline
                        placeholder='Enter Details if Needed'
                        style={styles.notesText}
                        value={notes}
                        onChangeText={setNotes}
                    />
                </View>

                <Pressable style={styles.button} onPress={handleAddItem}>
                    <Text style={styles.submit}>Add</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default AddItem;
