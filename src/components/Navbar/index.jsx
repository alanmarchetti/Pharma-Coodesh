import { FaUser } from "react-icons/fa";
import "./styles.css";

function NavBar({ text }) {
  return (
    <nav className="navbar mt-4">
      <div className="container-fluid d-flex align-items-center ">
        <h1 className="navbar-brand title">{text}</h1>
        <div className="icon">
          <FaUser />
        </div>
      </div>
    </nav>
  );
}
export { NavBar };
