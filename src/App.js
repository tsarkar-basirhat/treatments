import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../src/css/font-awesome.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Treatment from './pages/Treatment';
import Product from './pages/Product';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Router basename="/stefan/treatments/">
        <Routes>
            {/* <Route path='*' element={<NotFound />} /> */}

            <Route path="/" element={<Home />} />
            <Route path="/treatment" element={<Treatment />} />
            <Route path="/products" element={<Product />} />
            <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
