// src/components/ChannelList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ChannelList = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    // Fetch channels from the backend API
    fetch('/api/channels') // Assuming the API endpoint is '/api/channels'
      .then((response) => response.json())
      .then((data) => setChannels(data))
      .catch((error) => console.error('Error fetching channels:', error));
  }, []);

  return (
    <div>
      <h1>List of Channels</h1>
      <ul>
        {channels.map((channel) => (
          <li key={channel._id}>{channel.name}</li>
        ))}
      </ul>
      <Link to="/add">Add Channel</Link> {/* This link will take you to the "Add Channel" page */}
    </div>
  );
};

export default ChannelList;
