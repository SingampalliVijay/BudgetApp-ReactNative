import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import styles from "../styles/Calendar";

const CalenderRange = ({ setStartDate, setEndDate }: any) => {
    const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
    const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
    const minDate = new Date(2000, 0, 1);
    const maxDate = new Date(2900, 11, 31);

    const onDateChange = (date: Date, type: string) => {
        if (type === "END_DATE") {
            setSelectedEndDate(date);
            setEndDate(date);
        } else {
            setSelectedStartDate(date);
            setEndDate(null);
            setStartDate(date);
        }
    };
    return (
        <View style={styles.container}>
            <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={true}
                minDate={minDate}
                maxDate={maxDate}
                todayBackgroundColor="#F2E6FF"
                selectedDayColor="#7300E6"
                selectedDayTextColor="#FFFFFF"
                onDateChange={onDateChange}
                width={350}
            />
            <View style={styles.view}>
                <Text style={styles.startDate}>SELECTED START DATE: {selectedStartDate?.toDateString()}</Text>
                <Text style={styles.endDate}>SELECTED END DATE: {selectedEndDate?.toDateString()}</Text>
            </View>
        </View>
    );
};
export default CalenderRange;
