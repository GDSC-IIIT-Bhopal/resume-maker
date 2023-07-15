import './App.css';
import FullFun from './Full';
import imDSC from './GDSC.png';

function App() {
  return (
    <>
      <nav>
        <h1>Resume Maker&nbsp;</h1><img class="navdis600" id="gdsclogo" src={imDSC} alt="Logo" /><h1 class="navdis600">&nbsp;<a id="GitLink" href="https://pranay.wethinc.in/">GDSC IIIT Bhopal</a></h1>
      </nav>
      <div className="App">
        <FullFun />
      </div>
    </>
  );
}

export default App;
