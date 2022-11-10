import logo from './logo.svg';
import './App.css';
import First from "./component/first";
import Second from "./component/second";
import Third from "./component/third";
import Fourth from "./component/fourth";
import Fifth from "./component/fifth";
import Post from './component/posts';
import New from './component/new'




function App() {
  return (
    <div className="App">
     <First />
    <div className="second">
    <Second />
    </div>
    <div>
    
    </div>
     <Third />
     <Fourth />
     <Fifth />
     <div>
    <New/>
    </div>
    <br />
    <br />
    <div>
      <Post/>
    </div>
    </div>
    
   

   
    
  );
 
}

export default App ;

