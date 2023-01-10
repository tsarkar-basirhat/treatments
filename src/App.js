import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../src/css/font-awesome.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollTop from './common/ScrollTop';
import Home from './pages/Home';
import Treatment from './pages/Treatment';
import Product from './pages/Product';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import Discounts from './pages/Discounts';
import Career from './pages/Career';
import About from './pages/About';
import ProductView from './pages/ProductView';
import Partners from './pages/Partners';
import Policies from './pages/Policies';
import HowtoOrder from './pages/HowtoOrder';
import JobView from './pages/JobView';
import ShoppingCart from './pages/ShoppingCart';
import BookingCalendar from './pages/BookingCalendar';

function App() {
  return (
    <div className="App">
      <Router basename="/stefan/treatments/">
        <ScrollTop/>
        <Routes>
            {/* <Route path='*' element={<NotFound />} /> */}

            <Route path="/" element={<Home />} />
            <Route path="/treatment" element={<Treatment />} />
            <Route path="/products" element={<Product />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<Faq />} />

            <Route path="/discounts" element={<Discounts />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/product-view" element={<ProductView />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/how-to-order" element={<HowtoOrder />} />
            <Route path="/job-view" element={<JobView />} />

            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/booking-calendar" element={<BookingCalendar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
