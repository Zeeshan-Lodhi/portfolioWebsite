import React, { useEffect } from 'react'
import './Navbar.css';
import $ from 'jquery';


const Navbar = () => {

  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {

    animation();
    $(window).on('resize', function () {
      setTimeout(function () { animation(); }, 500);
    });

  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg ">
      <a className="navbar-brand navbar-logo " href='#/'>Zeeshan Lodhi</a>

      <button className="navbar-toggler"
        onClick={function () {
          setTimeout(function () { animation(); });
        }}

        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mr-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <a className="nav-link" href='#/'>
              <i className="fas fa-home"></i>
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href='#About_Section'>
              <i className="far fa-address-book" ></i>
              About
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href='#Projects_Section'>
              <i className="far fa-clone"></i>
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href='#Skills_Section'>
              <i className="far fa-chart-bar"></i>
              Skills
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href='#Contact_Section'>
              <i className="far fa-clone"></i>
              Contact Us
            </a>
          </li>

        </ul>
      </div>
    </nav>
  )
}
export default Navbar;