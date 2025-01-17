import React, { useState } from "react";
import Checkbox from "../checkBox/CheckBox";

interface Option {
    label: string;
    checked?: boolean;
}

interface ReminderProps {
    options: Option[];
}

const Reminder: React.FC<ReminderProps> = ({ options }) => {
    const [checkboxes] = useState(
        options.map(option => ({ ...option, checked: option.checked || false }))
    );

    return (
        <div className="space-y-2">
            {checkboxes.map((checkbox, index) => (
                <Checkbox
                    key={index}
                    shape="square"
                    checked={checkbox.checked}
                    label={checkbox.label}
                />
            ))}
        </div>
    );
};

export default Reminder;