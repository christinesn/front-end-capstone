import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Nav />
      </Header>
      <Main />
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
