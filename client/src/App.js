import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AddChannel from './components/AddChannel';
import ChannelList from './components/ChannelList';
import EditChannel from './components/EditChannel';
import DeleteChannel from './components/DeleteChannel';



function App() {
  return (

<Routes >
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddChannel} />
        <Route exact path="/list" component={ChannelList} />
        <Route exact path="/edit/:id" component={EditChannel} />
        <Route exact path="/delete/:id" component={DeleteChannel} />
</Routes>

  );
}

export default App;
