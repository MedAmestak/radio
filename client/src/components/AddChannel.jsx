// src/components/AddChannel.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddChannel = () => {
  const [channelData, setChannelData] = useState({
    name: '',
    frequency: '',
    nbre_user: '',
    logo: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChannelData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the backend API to add the channel
    fetch('/api/channels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(channelData),
    })
      .then((response) => response.json())
      .then(() => {
        // Redirect to the ChannelList page after successful addition
        navigate.push('/');
      })
      .catch((error) => console.error('Error adding channel:', error));
  };

  return (
    <div>
      <h1>Add Channel</h1>
      <form onSubmit={handleSubmit}>
        {/* Add input fields for the channel information */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={channelData.name} onChange={handleChange} />
        </div>
        {/* Add other input fields for frequency, nbre_user, logo */}
        <button type="submit">Add Channel</button>
      </form>
    </div>
  );
};

export default AddChannel;
