import logo from './logo.svg';
import './App.css';
import { ExampleComponent, TestComponent } from './components/remember/Examplecomponent';

import { Routes,  Route, BrowserRouter,  } from "react-router-dom";
import {RemuserComponent} from "./components/remember/Examplecomponent"
import Userremember from './components/remember/Userremember';
import Apprem from './components/remember/Apprem';




function App() {
  return (
    <>
    

    
    
    <Routes>
    <Route path="/slash/:name"   element={<RemuserComponent /> }  />
    <Route path="/example1"   element={<ExampleComponent text={"example1"} /> }  />
    <Route path="/example2"   element={<ExampleComponent text={"example2"} /> }  />
    
    <Route exact path="/"  element={<ExampleComponent text={"third"} /> }  />
    

    </Routes>
    <Apprem />
    
    </>
  )
}

export default App;
