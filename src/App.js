import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Helmet } from 'react-helmet'; 
import Header from './components/Header';
import Countdown from './components/Countdown';
import Notes from './components/Notes';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

// CSS imports
import './App.css';
import './assets/css/work.css';
import './assets/css/light.css';
// import './assets/css/dark.css';
import './assets/Font Awesome/css/all.css';

function App() {
  return (
    <ThemeProvider>
      {/* Your app components */}
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="One Page Website" />
          <title>One Page Website</title>
          <link rel="icon" href="/favicon.ico" />
        </Helmet> 
        <Header />
        <Countdown />
        <Notes />
        <Location />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}export default App;