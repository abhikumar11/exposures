import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ImageForm from "./components/ImageForm";
function App() {
   
     return (
          <div className="App">
               
               <ToastContainer />
               <Navbar/>
               <Routes>
                    <Route path="/"  element={<Home/>} />
               </Routes>
               <Routes>
                    <Route path="/addimage" exact element={<ImageForm />} />
               </Routes>
          </div>
     );
}

export default App;
