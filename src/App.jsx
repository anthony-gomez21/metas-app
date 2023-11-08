import './App.css';
import Footer from './components/compartidos/Footer';
import Header from './components/compartidos/Header';
import Main from './components/compartidos/Main';
import Lista from './components/lista/Lista';
import Detalles from './components/nueva/Detalles';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        {/* <Lista /> */}
        <Detalles></Detalles>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
