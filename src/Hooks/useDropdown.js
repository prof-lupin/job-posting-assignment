import React, {useState} from 'react';
import MultiSelect from 'react-multi-select-component';

const useDropdown = (data, defaultValue) => {
    const [selected, setSelected] = useState(defaultValue);

    const Dropdown = () => (
        <MultiSelect
            options={data}
            value={selected}
            onChange={setSelected}
            hasSelectAll={false}
            labelledBy={"Select"}
        />
    );

    return [selected, Dropdown, setSelected];
}

export default useDropdown;