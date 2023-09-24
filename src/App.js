import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import { useState } from 'react';

function App() {
const [projectName, setProjectName] = useState('project name');
  return (
    <div className="App">
      {
        <>
        <Header/>
        <Project text = {projectName}/>
        </>
      }
    </div>
  );
};

export default App;
