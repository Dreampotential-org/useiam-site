import logo from './logo.svg';
import './App.css';
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import FourthSection from './components/FourthSection/FourthSection';



function App() {
  return (
    <div className="App">
     <FirstSection/>
     <SecondSection/>
     {/* <ThirdSection/> */}
     <FourthSection/>
    </div>
  );
}

export default App;
