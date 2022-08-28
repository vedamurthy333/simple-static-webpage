import logo from './logo.svg';
import './App.css';
import Image from './components/image';
import Info from './components/info';
import Link from './components/link';
import About from './components/about';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Image />
      <Info />
      <Link />
      <About />
      <Footer />
    </div>
  );
}

export default App;
