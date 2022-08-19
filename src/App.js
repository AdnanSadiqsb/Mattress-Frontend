import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

import './css/main.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/admin/Login";
import ItemsList from "./components/admin/ItemsList";
import AddItem from "./components/admin/AddItem";
import ItemState from "./Context/Items/ItemsState";
import AlertState from "./Context/alert/AlertState";
import Alert from "./components/Alert";
function App() {
  return (
    <AlertState>

    <ItemState>

    <Router>

    <div className="main-cont">
      <div className="inner-cont">

        <Navbar/>
        <Alert/>
        <Routes>

          <Route exact path="/" element={<HomePage/>}></Route>
          <Route exact path="/login" element={<Login/>}> </Route>
          <Route exact path ='/itemsInfo' element={<ItemsList/>}></Route>
          <Route exact path="/AddItem" element={<AddItem/>}></Route>
        </Routes>
      

        <Footer/>
      </div>
    </div>
    </Router>
    </ItemState>
    </AlertState>
  );
}

export default App;
