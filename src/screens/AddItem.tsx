import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import styles from '../styles/AddItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux';
import RadioButton from '../components/RadioButton';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { addAmountToSubcategory, addItem, updateItem } from '../redux/BudgetAction';
import Toast from 'react-native-toast-message';
import AntIcon from 'react-native-vector-icons/AntDesign'

const AddItem = ({ navigation, route }: any) => {
    const [isFocus, setIsFocus] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const categories = useSelector((state: any) => state.budget.categories);
    const items = useSelector((state: any) => state.budget.items);
    const dispatch = useDispatch();
    const { expense, mode } = route.params || {};
    const [categoryValue, setCategoryValue] = useState('');
    const [subcategoryValue, setSubcategoryValue] = useState(expense?.subcategory || '');
    const [amount, setAmount] = useState(expense?.amount?.toString() || '');
    const [date, setDate] = useState(expense?.date || '');
    const [notes, setNotes] = useState(expense?.notes || '');
    const [paymentMode, setPaymentMode] = useState(mode === 'edit' ? expense.paymentMode : '');
    const [isEditable, setIsEditable] = useState(false)
    const [categoryName, setCategoryName] = useState(expense?.category || '');
    const [subcategoryName, setSubCategoryName] = useState('');
    const [categoryVerify, setCategoryVerify] = useState(false);
    const [subCategoryVerify, setSubCategoryVerify] = useState(false);
    const [paymentModeVerify, setPaymentModeVerify] = useState(false);
    const [dateVerify, setDateVerify] = useState(false);
    const [amountVerify, setAmountVerify] = useState(false);
    const [catIndex, setCatIndex] = useState(0)
    const [subCatIndex, setSubCatIndex] = useState(0);
    const newid = items.length ? Math.max(...items.map((sub: any) => sub.id)) + 1 : 1;

    var value = {
        radio: paymentMode
    }

    useEffect(() => {
        if (mode === 'edit' && expense) {
            setCategoryValue(expense.category);
            setSubcategoryValue(expense.subcategory);
            setSubCategoryName(expense.subcategory)
            setPaymentMode(expense.paymentMode);
        }
    }, [expense, mode]);

    useEffect(() => {
        if (mode === 'edit' && categories.length > 0) {
            const catId = categories.findIndex((cat: any) => cat.name === categoryValue);
            setCatIndex(catId);
            if (catId !== -1 && categories[catId].subcategories) {
                const subCatId = categories[catId].subcategories.findIndex((subcat: any) => subcat.name === subcategoryValue);
                setSubCatIndex(subCatId);
                // setSubcategoryValue(categories[catId].subcategories[subCatId].name);
            }
        }
    }, [categories, categoryValue, subcategoryValue, mode]);

    let categoryCount = [];
    for (var i = 0; i < categories.length; i++) {
        categoryCount.push({
            value: categories[i].id,
            label: categories[i].name
        });
    }

    let subcategory = [];
    let selectedCategory;
    if (mode === 'edit') {
        if (categoryCount[catIndex]) {
            selectedCategory = categories.find((cat: any) => cat.id === categoryCount[catIndex].value);
        }
    } else {
        selectedCategory = categories.find((cat: any) => cat.id === categoryValue);
    }
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
    }

    const handleAddItem = () => {
        if (validatingFields()) {
            const addAmount = parseFloat(amount);
            dispatch(addAmountToSubcategory(categoryValue, subcategoryValue, addAmount));
            console.log('itemmmmmm ', categoryName)
            const updatedItem = {
                id: expense?.id || newid,
                category: categoryName,
                subcategory: subcategoryName,
                amount: parseFloat(amount),
                date: date.toString(),
                notes: notes,
                paymentMode: paymentMode,
            };
            if (mode === 'edit') {
                dispatch(updateItem(updatedItem));
            } else {
                dispatch(addItem(newid, updatedItem.category, updatedItem.subcategory,
                    updatedItem.amount, updatedItem.date, updatedItem.notes, updatedItem.paymentMode));
            }
            Toast.show({
                type: 'success',
                text1: 'Item Added Successfully',
                position: 'bottom'
            });
            navigation.navigate('Expense');
            resetFormFields();
        } else {
            Toast.show({
                type: 'error',
                text1: 'Please fill all the required fields',
                position: 'bottom'
            });
        }
    };

    const resetFormFields = () => {
        setCategoryValue('');
        setSubcategoryValue('');
        setAmount('');
        setDate('');
        setPaymentMode('');
        setNotes('');
    };

    const activateEdit = () => {
        setIsEditable(!isEditable)
    }

    return (
        <SafeAreaView style={styles.safeArea}>
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
                        placeholder={!isFocus ? 'Select Category Text' : '...'}
                        searchPlaceholder="Search..."
                        value={mode === 'edit' ? categoryCount[catIndex] : categoryValue}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setCategoryValue(item.value);
                            setCategoryName(item.label);
                            setIsFocus(false);
                        }}
                        disable={mode === 'edit' ? isEditable : false}
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
                        value={mode === 'edit' ? subcategory[subCatIndex] : subcategoryValue}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setSubcategoryValue(item.value);
                            setSubCategoryName(item.label);
                            setIsFocus(false);
                        }}
                        disable={mode === 'edit' ? !isEditable : false} />
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
                        editable={mode === 'edit' ? isEditable : false}
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
                        editable={mode === 'edit' ? isEditable : true}
                    />
                </View>
                {amountVerify && <Text style={styles.error}>Enter Amount</Text>}
                <View style={styles.radioButton}>
                    <Text style={styles.payment}>Payment Mode</Text>

                    <RadioButton setPaymentMode={setPaymentMode} {...value}
                    disabled={mode === 'edit' ? !isEditable : false}
                    />
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
                        editable={mode === 'edit' ? isEditable : true}
                    />
                </View>
                <Pressable style={styles.button} onPress={handleAddItem}>
                    <Text style={styles.submit}>{mode === 'edit' ? 'Update' : 'Add'}</Text>
                </Pressable>
            </View>
            {mode === 'edit' &&
                <TouchableOpacity style={styles.editIconContainer} onPress={() => activateEdit()}>
                    <AntIcon name='edit' size={30} style={styles.editIcon} />
                </TouchableOpacity>
            }
        </SafeAreaView>
    )
}

export default AddItem;