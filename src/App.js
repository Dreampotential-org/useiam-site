import logo from './logo.svg';
import './App.css';
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import FifthSection from './components/FifththSection/FifthSection';
import EighthSection from './components/EighthSection/EighthSection';
import SixthSection from './components/SIxthSection/SixthSection';
import FourthSection from './components/FourthSection/FourthSection';
import NineSection from './components/NineSection/NineSection';
import Tenthsection from './tenthSection/TenthSection';
import TenthSection from './components/TenthSection/TenthSection';
import SeventhSection from './components/SeventhSection/SeventhSection';
import Footer from './components/FooterSection/Footer';
import { useState } from 'react';
// import uuid from 'uuid/v1'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const[messages,setMessages]=useState('');

  const addMessages=()=>{
    setMessages(m => [...m, uuidv4()]);
  }

  return (
    <div className="App">
     <FirstSection/>
     <SecondSection/>
     <ThirdSection/>
     <FourthSection/>
     <FifthSection/>
     <SixthSection/>
     <SeventhSection onHandleclick={addMessages}/>
     <EighthSection/>
     <NineSection messages={messages}/>
     <Footer/>
    </div>
  );
}

export default App;
