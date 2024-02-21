import React from 'react';
import './styles/global.css';
import NavBar from './components/NavBar/index.tsx';
import Main from './components/Main/index.tsx';
import About from './components/About/index.tsx';
import Services from './components/services/index.tsx';
import Coments from './components/Coments/index.tsx';
import ContactForm from './components/ContactForm/indext.tsx';
import Footer from './components/Footer/index.tsx';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Services />
      <About />
      <Coments />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
