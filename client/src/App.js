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
import NotesList from './components/notes/notesList';
import NotesAdd from './components/notes/notesAdd';

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
          <Route path="/notes/add" element={<NotesAdd/>} />
          <Route path="/todo/add" element={<TodoAdd/>} />
          <Route path="/notes" element={<NotesList/>} />
          <Route path="/todo" element={<TodoList/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
        <p>Version 1.5.1</p>
      </div>
    </Router>
  );
}

export default App;
