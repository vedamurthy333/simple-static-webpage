import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Products from './components/products';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Card 
        img="a13.jpg"
        rate="5(6) . IND"
        name="iphone 13"
        price="$150"
      />
      <Card 
        img="download.jpg"
        rate="4(6) . IND"
        name="iphone 12"
        price="$100"
      />
      <Card 
        img="a1.jpg"
        rate="6(6) . USA"
        name="iphone 14"
        price="$200"
      />
      <Card 
        img="a2.png"
        rate="3(6) . USA"
        name="iphone series"
        price="$300"
      />
    </div>
  );
}

export default App;
