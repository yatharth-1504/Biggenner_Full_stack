import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleRefresh }) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h1>The Blog Website</h1>
      <div className="links">
        <button
          onClick={(e) => {
            toggleRefresh();
          }}
          style={{
            color: "white",
            margin: "2px",
            backgroundColor: "#f1356d",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Home
        </button>
        <button
          onClick={(e) => navigate("/create")}
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          New Blog
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
