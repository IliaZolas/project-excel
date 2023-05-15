import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import IncomeStatement from './pages/IncomeStatement';
import Expenses from './pages/Expenses';
import Liabilities from './pages/Liabilities';
import Assets from './pages/Assets';
import Income from './pages/Income';
import IntellectualProperty from './pages/IntellectualProperty';
import PassiveIncome from './pages/PassiveIncome';
import Recon from './pages/Recon';
import Savings from './pages/Savings';
import Transactions from './pages/Transactions';
import SideNavbar from './components/sideNav';
import Navbar from './components/nav';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <SideNavbar />
        </div>
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
              />
            <Route 
              path="/income-statement" 
              element={<IncomeStatement />} 
              />
            <Route 
              path="/income" 
              element={<Income />} 
            />
            <Route 
                path="/expenses" 
                element={<Expenses />} 
                />
            <Route 
              path="/liabilities" 
              element={<Liabilities />} 
            />
            <Route 
                path="/assets" 
                element={<Assets />} 
                />
            <Route 
              path="/intellectual-property" 
              element={<IntellectualProperty />} 
            />
            <Route 
                path="/passive-income" 
                element={<PassiveIncome />} 
                />
            <Route 
              path="/transactions" 
              element={<Transactions />} 
            />
            <Route 
              path="/savings" 
              element={<Savings />} 
            />
            <Route 
              path="/recon" 
              element={<Recon />} 
            />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
