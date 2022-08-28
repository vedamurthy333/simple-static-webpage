import logo from './logo.svg';
import './App.css';
import Contents from './contents';

function App() {
  return (
    <div className="App">
      <Contents 
        img="logo192.png"
        name="react" 
        prio="1"

      />
      <Contents
       img="java.png"
       name="java"
       prio="2"
       />
       <Contents
       img="html.png"
       name="html"
       prio="3"
       />
       <Contents
       img="css.png"
       name="css"
       prio="4"
       />
    </div>
  );
}

export default App;
