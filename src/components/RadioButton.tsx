import React, { useMemo, useState, useEffect } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

export default function RadioButton({ setPaymentMode, initialValue }: any) {
    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'Cash',
            value: 'Cash'
        },
        {
            id: '2',
            label: 'Card',
            value: 'Card'
        }
    ]), []);

    const [selectedId, setSelectedId] = useState('');

    useEffect(() => {
        const initialButton = radioButtons.find(radio => radio.value === initialValue);
        if (initialButton) {
            setSelectedId(initialButton.id);
        }
    }, [initialValue, radioButtons]);

    const handlePress = (id: string) => {
        setSelectedId(id);
        const selectedButton = radioButtons.find(radio => radio.id === id);
        if (selectedButton) {
            setPaymentMode(selectedButton.value);
        }
    };

    return (
        <RadioGroup
            radioButtons={radioButtons}
            onPress={handlePress}
            selectedId={selectedId}
            layout='row'
            containerStyle={{ alignItems: 'flex-start' }}
        />
    );
};
