import Navbar from "./components/Nav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);
  function toggleRefresh() {
    setRefresh(!refresh);
  }
  return (
    <Router>
      <div className="App">
        <Navbar toggleRefresh={toggleRefresh}/>
        <div className="content">
          <Routes>
            <Route path="/" element={Home({ refresh })} />
            <Route exact path="/create" element={Create()} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
