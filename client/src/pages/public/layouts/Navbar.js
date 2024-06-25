import React, { useEffect } from "react";
import $ from "jquery";
import StickySidebar from "sticky-sidebar-v3";
import "../../assetsP/css/navbar.css";

const Navbar = () => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      const sidebarElement = document.querySelector(".your-sidebar-selector");
      const options = {
        topSpacing: 20,
        bottomSpacing: 20,
      };
      const sidebar = new StickySidebar(sidebarElement, options);
    });
    $(".submenu").before('<i class="fa-solid fa-arrow-down"></i>');

    $(".vertical-menu li i.switch").on("click", function () {
      var $submenu = $(this).next(".submenu");
      $submenu.slideToggle(300);
      $submenu.parent().toggleClass("openmenu");
    });

    $("button.burger-menu").on("click", function () {
      $(".canvas-menu").toggleClass("open");
      $(".main-overlay").toggleClass("active");
    });

    $(".canvas-menu .btn-close, .main-overlay").on("click", function () {
      $(".canvas-menu").removeClass("open");
      $(".main-overlay").removeClass("active");
    });

    $("button.search").on("click", function () {
      $(".search-popup").addClass("visible");
    });

    $(".search-popup .btn-close").on("click", function () {
      $(".search-popup").removeClass("visible");
    });

    $(document).keyup(function (e) {
      if (e.key === "Escape") {
        $(".search-popup").removeClass("visible");
      }
    });

    $('button[data-bs-toggle="tab"]').on("click", function () {
      $(".tab-pane").addClass("loading");
      $(".lds-dual-ring").addClass("loading");
      setTimeout(function () {
        $(".tab-pane").removeClass("loading");
        $(".lds-dual-ring").removeClass("loading");
      }, 500);
    });

    $(".post button.toggle-button").each(function () {
      $(this).on("click", function (e) {
        $(this).next(".social-share .icons").toggleClass("visible");
        $(this).toggleClass("icon-close").toggleClass("icon-share");
      });
    });

    var spacerList = document.getElementsByClassName("spacer");
    for (var i = 0; i < spacerList.length; i++) {
      var size = spacerList[i].getAttribute("data-height");
      spacerList[i].style.height = "" + size + "px";
    }

    var imageList = document.getElementsByClassName("data-bg-image");
    for (var i = 0; i < imageList.length; i++) {
      var bgimg = imageList[i].getAttribute("data-bg-image");
      imageList[i].style.backgroundImage = "url('" + bgimg + "')";
    }
  }, []);

  return (
    <>
      <header className="header-default py-xl-3 py-0">
        <nav className="navbar navbar-expand-lg">
          <div className="container-xl">
            {/* <!-- logo  --> */}
            <a href="#" className="navbar-brand">
              <h5>K-ADI</h5>
            </a>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown active">
                  <a href="#" className="nav-link dropdown-toggle">
                    Home
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#" className="dropdown-item">
                        Fashion
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-item">
                        Movies
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-item">
                        Electronic
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-item">
                        Cricket
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-item">
                        Technology
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Latest
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Trending
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- right side of header  --> */}
            <div className="header-right">
              <ul className="social-icons list-unstyled list-inline mb-0">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-itunes"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>

              {/* <!-- buttons  --> */}
              <div className="header-buttons">
                <button className="search icon-button">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <button className="burger-menu icon-button">
                  <span className="fa-solid fa-bars"></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- canvas menu  --> */}
      <div className="canvas-menu d-flex align-items-end flex-column">
        <button className="btn-close" aria-label="Close" type="button"></button>

        <div className="logo">
          <img src="images/logo.svg" alt="" />
        </div>
        <nav>
          <ul className="vertical-menu">
            <li className="active">
              <a href="#">Home</a>
              <ul className="submenu">
                <li>
                  <a href="#">Fashion</a>
                </li>
                <li>
                  <a href="#">Movies</a>
                </li>
                <li>
                  <a href="#">Electronic</a>
                </li>
                <li>
                  <a href="#">Cricket</a>
                </li>
                <li>
                  <a href="#">Technology</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Latest</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <ul className="social-icons list-unstyled list-inline mb-0 mt-auto w-100">
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-itunes"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* <!-- search pop up  --> */}
      <div className="search-popup">
        <button className="btn-close" aria-label="Close" type="button"></button>

        <div className="search-content">
          <div className="text-center">
            <h3 className="mb-4 mt-0">Press ESC to close</h3>
          </div>

          <form action="" className="d-flex search-form">
            <input
              type="search"
              placeholder="Search and press enter ..."
              aria-label="Search"
              className="form-control me-2"
            />
            <button className="btn btn-default btn-lg" type="submit">
              <i className="icon-magnifier"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
