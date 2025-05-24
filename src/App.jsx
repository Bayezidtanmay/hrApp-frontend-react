// App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonList from './PersonList';
import Header from './Header';
import Footer from './Footer';
import AddEmployee from './AddEmployee';
import About from './About';
import useAxios from './hooks/useAxios';

import './styles/App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const { get } = useAxios();

  useEffect(() => {
    get('/employees')
      .then(setEmployees)
      .catch(err => console.error("Fetch error:", err));
  }, [get]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PersonList employees={employees} />} />
        <Route path="/about" element={<About />} />
        <Route path="/add" element={<AddEmployee onAddEmployee={setEmployees} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

