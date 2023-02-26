import "./Navbar.css";

function NavBar() {
  return (
    <>
      <nav>
        <svg
          id="logo-13"
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>

        <div>
          <ul id="navbar">
            <li>
              <a className="active" href="/home">
                Home
              </a>
            </li>
            <li>
              <a href="/readlist">Reading List</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div id="mobile">
          <i id="bar"></i>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
