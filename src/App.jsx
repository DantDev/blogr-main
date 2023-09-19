import React from "react"
import logo from "./assets/images/logo.svg"
import bgIntroDesk from "./assets/images/bg-pattern-intro-desktop.svg"
import arrowLight from "./assets/images/icon-arrow-light.svg"
import arrowDark from "./assets/images/icon-arrow-dark.svg"
import bgCicles from "./assets/images/bg-pattern-circles.svg"
import editorDesktop from "./assets/images/illustration-editor-desktop.svg"
import editorMobile from "./assets/images/illustration-editor-mobile.svg"
import laptopDesktop from "./assets/images/illustration-laptop-desktop.svg"
import laptopMobile from "./assets/images/illustration-laptop-mobile.svg"
import phonesIllustration from "./assets/images/illustration-phones.svg"

function App() {

  const [openProduct, setOpenProduct] = React.useState(false)
  const [openCompany, setOpenCompany] = React.useState(false)
  const [openConnect , setOpenConnect] = React.useState(false)
  
  const dropProduct = () => {
    setOpenProduct(!openProduct)
  }

  const dropCompany = () => {
    setOpenCompany(!openCompany)
  }

  const dropConnect = () => {
    setOpenConnect(!openConnect)
  }

  
  return (
    <div className="container">
    <header>
      <div className="bg-container">
      <img className="intro-bg-pattern" src={bgIntroDesk}/>
      </div>
      <nav className="nav">
        <div className="logo-div">
          <img src={logo}/>
        </div>
        <div className="navigation">
          <input type="checkbox" className="toggle-menu" />
          <div className="hamburger"></div>
          <ul className="menu">
            <div className="nav-section">
              <li>
                <div className="dropdown">
                  <label onClick={dropProduct} className="nav-item">Product
                    <img className={openProduct ? "up-arrow" : "down-arrow"} src={arrowLight} />
                    <img className={openProduct ? "up-arrow-dark" : "down-arrow-dark"} src={arrowDark} />
                  </label>
                  <ul className={openProduct ? "dropdown-product-active" : "dropdown-product"}>
                    <li className="drop-item">
                      <p className="drop-text"><a href="">Overview</a></p>
                    </li>
                    <li className="drop-item">
                      <p className="drop-text"><a href="">Pricing</a></p>
                    </li>
                    <li className="drop-item">
                      <p className="drop-text"><a href="">Marketplace</a></p>
                    </li>
                    <li className="drop-item">
                      <p className="drop-text"><a href="">Features</a></p>
                    </li>
                    <li className="drop-item">
                      <p className="drop-text"><a href="">Integrations</a></p>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <label onClick={dropCompany} className="nav-item">Company
                    <img className={openCompany ? "up-arrow" : "down-arrow"} src={arrowLight} />
                    <img className={openCompany ? "up-arrow-dark" : "down-arrow-dark"} src={arrowDark} />
                  </label>
                  <ul className={openCompany ? "dropdown-company-active" : "dropdown-company"}>
                    <li className="drop-item">
                      <p className="drop-text"><a href="">About</a></p>
                    </li>
                    <li className="drop-item">
                      <p className="drop-text"><a href="">Team</a></p>
                    </li>
                    <li className="drop-item">
                      <p className="drop-text"><a href="">Blog</a></p>
                    </li>
                    <li className="drop-item">
                      <p className="drop-text"><a href="">Careers</a></p>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <label className="nav-item" onClick={dropConnect}>Connect
                    <img className={openConnect ? "up-arrow" : "down-arrow"} src={arrowLight} />
                    <img className={openConnect ? "up-arrow-dark" : "down-arrow-dark"} src={arrowDark} />
                  </label>
                  <ul className={openConnect ? "dropdown-connect-active" : "dropdown-connect"}>
                    <li className="drop-item">
                      <p className="drop-text"><a href="">Contact</a></p>
                    </li>
                    <li className="drop-item">
                      <p className="drop-text"><a href="">Newsletter</a></p>
                    </li>
                    <li className="drop-item">
                      <p className="drop-text"><a href="">LinkedIn</a></p>
                    </li>
                  </ul>
                </div>
              </li>
            </div>
            <div className="login-section">
              <li className="nav-login">
                <p className="login-btn"><a href="">Login</a></p>
              </li>
              <li>
                <button className="signup-btn">Sign Up</button>
              </li>
            </div>
          </ul>
        </div>
      </nav>
      <div className="header-content">
        <h1 className="header-title">A modern publishing platform</h1>
        <p className="header-text">Grow your audience and build your online brand</p>
        <div className="header-content-btns">
          <button className="start-btn">Start for Free</button>
          <button className="learn-btn">Learn More</button>
        </div>
      </div>
    </header>
    <main>
      <div className="content-1">
        <h2 className="content-1-title">Designed for the future</h2>
          <div className="content-1-container">
            <div className="content-1-info">
              <h3 className="content-subtitle">Introducing an extensible editor</h3>
              <p className="content-text">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
              <h3 className="content-subtitle">Robust content management</h3>
              <p className="content-text">Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
            </div>
            <div className="content-1-img-container">
              <img className="content-1-img-mobile" src={editorMobile}/>
              <img className="content-1-img" src={editorDesktop}/>
            </div>
          </div>
      </div>
      <div className="content-2">
        <div className="content-2-illustrations">
          <div className="circle-container">
            <img className="circle-illustration" src={bgCicles}/>
          </div>
          <img className="phones-illustration" src={phonesIllustration}/>
        </div>
        <div className="content-2-info">
          <h2 className="content-2-title">State of the Art Infrastructure</h2>
          <p className="content-2-text">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
        </div>
      </div>
      <div className="content-3">
        <div className="content-3-illustrations">
          <img className="laptop-img-desktop" src={laptopDesktop}/>
          <img className="laptop-img-mobile" src={laptopMobile}/>
        </div>
        <div className="content-3-info">
          <h3 className="content-subtitle">Free, open, simple</h3>
          <p className="content-text">Blogr is a free and open source application backed by a large community of helpful developers. It sopports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
          <h3 className="content-subtitle">Powerful tooling</h3>
          <p className="content-text">Batteries included. We built a simple and straightfoward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
        </div>
      </div>
    </main>
    <footer>
      <div className="footer-logo">
        <img src={logo}/>
      </div>
      <div className="footer-menu">
        <h4 className="footer-menu-title">Product</h4>
        <p className="footer-menu-item"><a href="">Overview</a></p>
        <p className="footer-menu-item"><a href="">Pricing</a></p>
        <p className="footer-menu-item"><a href="">Marketplace</a></p>
        <p className="footer-menu-item"><a href="">Features</a></p>
        <p className="footer-menu-item"><a href="">Integrations</a></p>
      </div>
      <div className="footer-menu">
        <h4 className="footer-menu-title">Company</h4>
        <p className="footer-menu-item"><a href="">About</a></p>
        <p className="footer-menu-item"><a href="">Team</a></p>
        <p className="footer-menu-item"><a href="">Blog</a></p>
        <p className="footer-menu-item"><a href="">Careers</a></p>
      </div>
      <div className="footer-menu">
        <h4 className="footer-menu-title">Connect</h4>
        <p className="footer-menu-item"><a href="">Contact</a></p>
        <p className="footer-menu-item"><a href="">Newsletter</a></p>
        <p className="footer-menu-item"><a href="">LinkedIn</a></p>
      </div>
    </footer>
    </div>
  )
}

export default App
