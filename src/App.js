import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState();
  return (
    <div>
     <Header />
     <Nav onSetPage={setPage} />
     <Section onPage={page}/>
     <Footer></Footer>
    </div>
  );
}

export default App;
