import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Rooms />
        <Amenities />
      </main>
      <Footer />
    </div>
  );
}

export default App;