import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product_details from './Product_details';
import Comparepage from './Comparepage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Product_details />}/>
        <Route path="/comparepage" exact element={<Comparepage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
