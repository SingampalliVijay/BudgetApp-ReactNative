import React, { useMemo, useState, useEffect } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

export default function RadioButton(props: any) {
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
        // console.log('Initial value ', props.radio);
        const initialButton = radioButtons.find(radio => radio.value == props.radio);
        if (initialButton) {
            setSelectedId(initialButton.id);
        }
    }, [props.radio, radioButtons]);

    const handlePress = (id: string) => {
        // if (props.disabled) return;
        setSelectedId(id);
        const selectedButton = radioButtons.find(radio => radio.id === id);
        if (selectedButton) {
            props.setPaymentMode(selectedButton.value);
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
