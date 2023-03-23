import logo from './logo.svg';
import './App.css';
import LandingPage from './views/LandingPage';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import TasksContainer from './views/TasksContainer';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
   <>
   <Router>
    <Routes>
     <Route path="/" element={<LandingPage/>}/>
     <Route path="/sign-up" element={<SignUp/>}/>
     <Route path="/sign-in" element={<SignIn/>}/>
     <Route path="/tasks" element={<TasksContainer/>}/>
      </Routes>
    </Router>
   
   </>
  );
}

export default App;
