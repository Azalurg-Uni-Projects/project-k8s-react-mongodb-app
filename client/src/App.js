import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import TodoList from './components/todo/todoList';
import TodoAdd from './components/todo/todoAdd';
import Home from './components/core/Home';

function App() {
  return (
    <Router>
      <div className="Main">
        <nav>
          <ul>
            <li>
              <Link to="/" className="bntLink">Home</Link>
            </li>
            <li>
              <Link to="/todo" className="bntLink">Todos List</Link>
            </li>
            <li>
              <Link to="/todo/add" className="bntLink">Add todo</Link>
            </li>
            <li>
              <Link to="/notes" className="bntLink">Note List</Link>
            </li>
            <li>
              <Link to="/notes/add" className="bntLink">Add Note</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/todo/add" element={<TodoAdd/>} />
          <Route path="/todo" element={<TodoList/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
