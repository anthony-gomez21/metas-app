import './App.css';
import Footer from './components/compartidos/Footer';
import Header from './components/compartidos/Header';
import Main from './components/compartidos/Main';
import Meta from './components/lista/Meta';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Meta></Meta>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
