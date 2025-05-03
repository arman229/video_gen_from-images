'use client'

import React, { useState } from 'react';

const TextSubmitForm = () => {
    const [text, setText] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        try {
            const response = await fetch('http://localhost:8000/post_request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: text }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setResponseMessage(result.message); // Update state with the response message
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('An error occurred');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="mt-8 resize-none rounded-lg border border-gray-300 p-4 text-sm"
                    placeholder="Write your video script here..."
                    value={text}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default TextSubmitForm;
