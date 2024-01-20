import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard'; 

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p class="font-bold" >
  //         Edit <code>src/App.js</code> and save to be awesome.
  //       </p>
  //       <Link
  //         to="/dashboard"
  //         className="App-link"
  //       >
  //         Go to Dashboard
  //       </Link>


  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Go to Dashboard
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
