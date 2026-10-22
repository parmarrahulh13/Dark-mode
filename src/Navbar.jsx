
import "./Navbar.css";

function Navbar({ changeBackground }) {
  

  return (
    <>
      <div className="navbar">
        
        <h1>Iron <span>Man</span></h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Tech</li>
          <li>Weapons</li>
          <button onClick={(onClick={changeBackground})}>Mode</button>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
