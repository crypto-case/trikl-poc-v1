import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useMoralis } from "react-moralis";
import { Moralis } from "moralis";
import Home from "./pages/home/Home";
import DappHome from "./pages/dApp/DappHome";
import Dashboard from "./pages/userDashboard/Dashboard";
import Transaction from "./pages/userDashboard/Transaction";
import ExpertDashboard from "./pages/expert/ExpertDashboard";
import Subscriptions from "./pages/userDashboard/UserSubscriptions";
import DepositFunds from "./pages/expert/DepositFunds";

function App() {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const appId = process.env.REACT_APP_APP_ID;
  Moralis.start({ serverUrl, appId });

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="launch-dapp" element={<DappHome />} />
            <Route path="user-dashboard" element={<Dashboard />} />
            <Route path="user-transactions" element={<Transaction />} />
            <Route path="user-subscriptions" element={<Subscriptions />} />
            <Route path="expert-dashboard" element={<ExpertDashboard />} />
            <Route path="popup" element={<DepositFunds />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
