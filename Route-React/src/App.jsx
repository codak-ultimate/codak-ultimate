
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="min-h-[100vh] bg-gradient-radial from-red-500 to-red-900">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
