import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import MainContainer from "./MainContainer.jsx";
import Footer from "./components/Footer.jsx"; 

function App() {
  return (
    <Router>
      <div id="container">
        <Navbar />
        <MainContainer />
        <Footer /> {/* Render Footer component */}
      </div>
    </Router>
  );
}

export default App;
