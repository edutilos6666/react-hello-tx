import React, { useState, useCallback } from 'react';
import LaunchList from './components/LaunchList';
import LaunchProfile from './components/LaunchProfile';
import WorkerListContainer from './components/WorkerList';

import './App.css';
import WorkerProfileContainer from './components/WorkerProfile';
import WorkerCreate from './components/WorkerCreate/WorkerCreate';
import WorkerComponent from './components/WorkerComponent';
import StudentComponent from './components/StudentComponent';

// const App = () => {
//   const [id, setId] = useState(1);
//   const handleIdChange = useCallback(newId=> {
//     setId(newId);
//   }, []);

//   return (
//     <div className="App">
//       <WorkerListContainer handleIdChange={handleIdChange} />
//       <WorkerProfileContainer id={id} />
//       <WorkerCreate />
//     </div>
//   );
// };

const App = ()=> (
  // <WorkerComponent />
  <StudentComponent />
);

export default App;