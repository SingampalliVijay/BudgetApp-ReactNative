import { Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Slider from 'rn-range-slider';
import styles from '../styles/Amount';

const Thumb = () => <View style={styles.thumb} />;
const Rail = () => <View style={styles.rail} />;
const RailSelected = () => <View style={styles.railSelected} />;
const Label = ({ text }: { text: string }) => <Text style={styles.label}>{text}</Text>;
const Notch = () => <View style={styles.notch} />;

const AmountRange = ({ minAmount, maxAmount, setLowAmount, setHighAmount }: any) => {
    const renderThumb = useCallback(() => <Thumb />, []);
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);
    const renderLabel = useCallback((value: any) => <Label text={value} />, []);
    const renderNotch = useCallback(() => <Notch />, []);
    const handleValueChange = useCallback((low: any, high: any) => {
        if (setLowAmount && setHighAmount) {
            setLowAmount(low);
            setHighAmount(high);
        }
    }, [setLowAmount, setHighAmount]);
    return (
        <SafeAreaView>
            <Slider
                style={styles.slider}
                min={0}
                max={30000}
                step={1}
                low={minAmount}
                high={maxAmount}
                floatingLabel
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                renderLabel={renderLabel}
                renderNotch={renderNotch}
                onValueChanged={handleValueChange}
            />
            <Text style={styles.text}>Selected Range: {minAmount} - {maxAmount}</Text>
        </SafeAreaView>
    );
};

export default AmountRange
