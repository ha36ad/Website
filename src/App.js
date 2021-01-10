import React from 'react';
import Resume from './components/Resume';
import Project from './components/Projects'
import Header from './components/Header';
import Navigation from './components/Navigation';
function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Project />
      <Resume />
    </>
  );
}

export default App;
