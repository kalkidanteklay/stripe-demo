import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightPanel from './components/RightPanel';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-wrapper">
        <Header />
        <div className="content-scrollable">
          <MainContent />
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
