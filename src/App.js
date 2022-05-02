import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Components/Pages/Shared/NotFound/NotFound";
import Home from "./Components/Pages/Home/Home/Home";
import Header from "./Components/Pages/Shared/Header/Header";
import Login from "./Components/Pages/Login/Login/Login";
import Signup from "./Components/Pages/Login/Signup/Signup";
import AddInventory from "./Components/Pages/Home/AddInventory/AddInventory";
import InventoryDetails from "./Components/Pages/Home/InventoryDetails/InventoryDetails";
import Blog from "./Components/Pages/Blog/Blog";
import AllInventory from "./Components/Pages/Home/AllInventory/AllInventory";
import Footer from "./Components/Pages/Footer/Footer";
import RequireAuth from "./Components/Pages/Login/RequireAuth/RequireAuth";
import MyInventory from "./Components/Pages/MyInventory/MyInventory";
import HomeInventory from "./Components/Pages/Home/HomeInventory/HomeInventory";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<><Home></Home><HomeInventory></HomeInventory></>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/add-inventory"
          element={
            <RequireAuth>
              <AddInventory></AddInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory/:id"
          element={<InventoryDetails></InventoryDetails>}
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <AllInventory></AllInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/my-items"
          element={
            <RequireAuth>
              <MyInventory></MyInventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
