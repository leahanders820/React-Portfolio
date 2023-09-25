import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import { useState } from 'react';

function App() {
  const [projectName, setProjectName] = useState('project name');

  const updateProject = (projectUpdateName) => {
    setProjectName(projectUpdateName);
  };

  const HeaderChildren = () => {
    return <>
      <button onClick={() => updateProject('project1')}>Project 1</button>
      <button onClick={() => updateProject('project2')}>Project 2</button>
      <button onClick={() => updateProject('project3')}>Project 3</button>
      </>
  };

  

  return (
    <div className="App">
      {
        <>
          <Header children={<HeaderChildren/>}/>
          <Project text={projectName} />
        </>
      }
    </div>
  );
};

export default App;
