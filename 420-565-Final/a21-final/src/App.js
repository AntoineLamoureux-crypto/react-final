import logo from './logo.svg';
import './App.css';
import TabHommesComponent from './TabHommesComponent.js';
import TabAllClientComponent from './TabAllClientComponent';
import TabOntariensComponent from './TabOntariensComponent';

function App() {


  return (
    <div className="App">
      <TabAllClientComponent/>
      <TabHommesComponent/>
      <TabOntariensComponent/>
    </div>
  );
}

export default App;
