import { Routes, Route} from "react-router-dom";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="/" element ={<NotFound/>}/> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
