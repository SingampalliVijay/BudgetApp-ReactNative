import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/ExpenseDetails'
import AntIcon from 'react-native-vector-icons/AntDesign'

const ExpenseDetails = ({ navigation, route }: any) => {
    const { expense } = route.params;

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.overView}>
                <View style={styles.item}>
                    <Text style={styles.itemText}>ID: </Text>
                    <Text style={styles.categoryText}>{expense.id} </Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemText}>Category: </Text>
                    <Text style={styles.categoryText}>{expense.category} </Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemText}>SubCategory: </Text>
                    <Text style={styles.categoryText}>{expense.subcategory} </Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemText}>Amount: </Text>
                    <Text style={styles.categoryText}>{expense.amount} </Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemText}>Date: </Text>
                    <Text style={styles.categoryText}>{expense.date} </Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemText}>PaymentMode: </Text>
                    <Text style={styles.categoryText}>{expense.paymentMode} </Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemText}>Notes: </Text>
                    <Text style={styles.categoryText}>{expense.notes} </Text>
                </View>
                <TouchableOpacity style={styles.editIconContainer}
                    onPress={() => navigation.navigate('AddItem', { expense ,mode:'edit'})}>
                    <AntIcon name='edit' size={30} style={styles.editIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ExpenseDetails