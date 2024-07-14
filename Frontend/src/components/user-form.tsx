import React from "react";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormState {
    name: string;
    phone: string;
    email: string;
    password: string;
    isDriver: boolean;
}

const NewUserForm: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        phone: '',
        email: '',
        password: '',
        isDriver: false,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
            />
            <br />
            <input
                type="text"
                name="phone"
                value={formData.phone}
                placeholder="Phone"
                onChange={handleChange}
            />
            <br />
            <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
            />
            <br />
            <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
            />
            <br />
            <label htmlFor="driverCheckbox">Driver?</label>
            <input
                type="checkbox"
                name="isDriver"
                checked={formData.isDriver}
                onChange={handleChange}
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default NewUserForm;
