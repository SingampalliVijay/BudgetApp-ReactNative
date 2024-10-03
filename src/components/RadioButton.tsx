import React, { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

export default function RadioButton({ setPaymentMode }: any) {
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
            containerStyle={{alignItems:'flex-start'}}
        />
    );

};
