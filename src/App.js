import React from 'react'
import './App.css';
import Navbar from "./components/Navbar";
import ProfileTabs from './components/ProfileTabs';
import ServicesText from './components/ServicesText';
import SlideBar from "./components/SlideBar";
import { SlideData } from './data/SlideData';
import Horoscope from './components/Horoscope'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SlideBar slides={SlideData}/>
      <ServicesText/>
      <ProfileTabs/>
      <Horoscope/>
    </div>
  );
}

export default App;
