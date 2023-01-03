import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router basename="/stefan/treatments/">
        <Routes>
            {/* <Route path='*' element={<NotFound />} /> */}

            <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
