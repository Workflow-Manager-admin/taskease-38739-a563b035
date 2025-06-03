import React from 'react';
import './App.css';
import TaskEaseContainer from './TaskEaseContainer';

// PUBLIC_INTERFACE
function App() {
  /**
   * App wrapper for TaskEase, contains navbar and main content.
   */
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol" style={{ color: '#1976d2' }}>✓</span> TaskEase
            </div>
            <span style={{ color: '#666', fontWeight: 400 }}>Your Todo App</span>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          <TaskEaseContainer />
        </div>
      </main>
    </div>
  );
}

export default App;