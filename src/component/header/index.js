export default function Header() {
  return (
    <header
      id="header"
      className="fixed-top"
      style={{ backgroundColor: "#f3f5fa",maxHeight:"60px" }}
    >
      <div className="container d-flex align-items-center">
        {/* <h1 className="logo me-auto">
          <a href="index.html">Ailena</a>
        </h1> */}
        <a href="index.html" className="logo me-auto">
          <img src="logo.png" alt="" className="img-fluid" />
        </a>

        {/* <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link   scrollto" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Team
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="getstarted scrollto" href="#about">
                
                Get Started
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav> */}
      </div>
      <div class="hamburger-menu" style={{float:"right"}}>
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul class="menu__box">
          <li>
            <a class="menu__item" href="#">
              Home
            </a>
          </li>
          <li>
            <a class="menu__item" href="#about">
              About
            </a>
          </li>
          <li>
            <a class="menu__item" href="#services">
              Services
            </a>
          </li>
          <li>
            <a class="menu__item" href="#portfolio">
            Neurotech
            </a>
          </li>
          <li>
            <a class="menu__item" href="#portfolio">
              Porfolio
            </a>
          </li>
          <li>
            <a class="menu__item" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
