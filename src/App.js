import { BrowserRouter,Route,Routes } from "react-router-dom";
import Categories from "./components/Categories";
import Search from "./components/Search";
import Cuisine from "./pages/Cuisine";
import Home from "./pages/Home";
import Receipe from "./pages/Receipe";
import Searched from "./pages/Searched";




function App() {
  return (
    <BrowserRouter>
      <Search/>
      <Categories/>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cuisine/:category" element={<Cuisine/>}/>
            <Route path="/searched/:search" element={<Searched/>}/>
            <Route path="/receipe/:name" element={<Receipe/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
