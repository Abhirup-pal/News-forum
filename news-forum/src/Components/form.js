import React, { useState } from 'react';

const SubscriptionForm = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/subscribe', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email }),
            });
            console.log("second")
            if (response.ok) {
              alert('Subscribed successfully!');
            } else {
              const data = await response.json();
              alert(data.message);
            }
          } catch (error) {
            console.log(error);
            alert('Server error');
          }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-danger">
                Subscribe
            </button>
        </form>
    );
};

export default SubscriptionForm;
