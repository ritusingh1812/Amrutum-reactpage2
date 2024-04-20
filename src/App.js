
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Result from './components/Result';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Header></Header>
  
    <Filters></Filters>
    <hr></hr>
    <Result></Result>
    </>
  );
}

export default App;
