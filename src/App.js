import './App.css';
import Accordian from './component/Accordian';
import Navbar from './component/Navbar';
import ProfileCv from './component/ProfileCv';
import Progress from './component/Progress';
import TextForm from './component/TextForm';
import UperCase from './component/UperCase';
import WordCounter from './component/WordCounter';

function App() {
  return (
    <div className="App">
     {/* <Navbar title="Asim" /> */}
      {/* <div className='row'>
        <div className='col-md-3'><ProfileCv/></div>
        <div className='col-md-9'><Accordian/>
        <div className='col-md-9'><Progress/></div></div>
        
      </div> */}
      {/* <WordCounter/> */}
      <UperCase/>
      <TextForm/>
    </div>
  );
}

export default App;
