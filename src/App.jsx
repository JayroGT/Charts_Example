import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css'
import Chart from './component/Chart'
import { ExampleTwo } from "./component/ExampleTwo";
import { ExampleThree } from "./component/ExampleThree";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/example_1" element={<Chart/>} /> 
        <Route path="/example_2" element={<ExampleTwo/>} />
        <Route path="/example_3" element={<ExampleThree/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App