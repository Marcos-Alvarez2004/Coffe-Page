import Home from "./Components/Home/Home";
import DataProvider from "./Components/DataContext/DataContext";
import CartContent from "./Components/CartContent/CartContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartContent />} />
          </Routes>
        </Router>
      </DataProvider>
    </>
  );
}

export default App;
