import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Menu from './components/Menu';
import Calendrier from './components/Calendrier';
import Palmares from './components/Palmares';
import Classement from './components/Classement';
import Statistiques from './components/Statistiques';

const App = () => {
  return (
    <Router>
      <Container>
        <Menu />
        <Routes>
        <Route path="/" element={<Calendrier />} />
          <Route path="/calendrier" element={<Calendrier />} />
          <Route path="/classement" element={<Classement />} />
          <Route path="/statistiques" element={<Statistiques />} />
          <Route path="/palmares" element={<Palmares />} />
        
          
        </Routes>
      </Container>
    </Router>
  );
};

export default App;