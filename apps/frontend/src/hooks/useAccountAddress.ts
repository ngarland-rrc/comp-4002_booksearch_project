import { useState } from "react";

export function useFormInput(initialValue: string = "") {
    const [value, setValue] = useState(initialValue);
    const [message, setMessage] = useState("");

    // Handle input change events
    function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setValue(e.target.value);
        if (message) {
            setMessage(""); // Clear error message on typing
        }
    }

    // Execute validation rules
    function validate(validator: (val: string) => string | null): boolean {
        const error = validator(value);
        setMessage(error || "");
        return !error; // Returns true if valid, false if invalid
    }

    // Reset input state
    function reset() {
        setValue(initialValue);
        setMessage("");
    }

    return {
        value,
        message,
        onChange,
        validate,
        reset
    };
}