import logo from './logo.svg';
import './App.css';
import First from "./component/first";
import Second from "./component/second";
import Third from "./component/third";
import Fourth from "./component/fourth";
import Fifth from "./component/fifth";




function App() {
  return (
    <div className="App">
     <First />
    <div className="second">
    <Second />
    </div>
     <Third />
     <Fourth />
     <Fifth />
    </div>
  );
 
}

export default App ;

