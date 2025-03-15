import React from 'react';

const Email = ({ formData }) => {
    return (
        <div>
            <h1>Demo Mail</h1>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Contact:</strong> {formData.contact}</p>
            <p><strong>Budget:</strong> {formData.budget}</p>
            <p><strong>Country:</strong> {formData.country}</p>
            <p><strong>Message:</strong> {formData.message}</p>
        </div>
    );
};

export default Email;
