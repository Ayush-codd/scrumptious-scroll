
import React from 'react';
import Index from './pages/Index';
import './App.css';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="app">
      <Toaster />
      <Index />
    </div>
  );
}

export default App;
