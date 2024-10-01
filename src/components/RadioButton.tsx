import React, { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

export default function RadioButton() {
    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'Cash',
            value: 'option 1'
        },
        {
            id: '2',
            label: 'Card',
            value: 'option 2'
        }
    ]), []);

    const [selectedId, setSelectedId] = useState('');

    return (
        <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout='row'
            containerStyle={{alignItems:'flex-start'}}
        />
    );

};
