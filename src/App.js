import "./App.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
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
import RequireAuth from "./Components/Pages/Login/RequireAuth/RequireAuth";
import MyInventory from "./Components/Pages/MyInventory/MyInventory";
import ScrollButton from "./Components/Pages/Shared/ScrollButton/ScrollButton";
import UpdateInventory from "./Components/Pages/Shared/UpdateInventory/UpdateInventory";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import UserProfile from "./Components/Pages/Shared/UserProfile/UserProfile";
import Partners from "./Components/Pages/Home/Partners/Partners";

const override = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <ClimbingBoxLoader
          color={"#FD233D"}
          loading={loading}
          size={25}
          css={override}
        />
      ) : (
        <Header></Header>
      )}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/partners" element={<Partners></Partners>}></Route>
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
          element={
            <RequireAuth>
              <InventoryDetails></InventoryDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/update/:id"
          element={<UpdateInventory></UpdateInventory>}
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
        <Route path="/user" element={<UserProfile></UserProfile>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ScrollButton></ScrollButton>
      <ToastContainer></ToastContainer>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
