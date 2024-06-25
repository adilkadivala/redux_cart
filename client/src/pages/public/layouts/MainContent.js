import React from "react";
import "../../assetsP/css/maincontent.css";

const MainContent = () => {
  return (
    <>
      <section className="main-content">
        <div className="container-xl">
          <div className="row gy-4">
            {/* <!-- left part 1st section  --> */}
            <div className="col-lg-8">
              <div className="section-header">
                <h3 className="section-title">Editor's Pick</h3>
              </div>

              <div className="padding-30 rounded bordered">
                <div className="row gy-5">
                  <div className="col-sm-6">
                    {/* <!-- post  --> */}
                    <div className="post">
                      <div className="thumb rounded">
                        <a
                          href="#"
                          className="category-badge position-absolute"
                        >
                          Lifestyle
                        </a>
                        <span className="post-format">
                          <i class="fa-solid fa-share"></i>
                        </span>
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/editors-lg.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <ul className="meta list-inline mt-4 mb-0">
                        <li className="list-inline-item">
                          <a href="#">
                            <img
                              className="author"
                              src={require("../../assetsP/images/other/author-sm.jpg")}
                              alt=""
                            />
                            Techie Coder
                          </a>
                        </li>
                        <li className="list-inline-item">05 Jun 2021</li>
                      </ul>
                      <h5 className="post-title mb-3 mt-3">
                        <a href="#">3 must visit Place in switzerland</a>
                      </h5>
                      <p className="excerpt mb-0">
                        This is Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Explicabo, quasi.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="post post-list-sm square">
                      <div className="thumb rounded">
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/editor-side-1.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#"> 2 Policemen saved life like a hero </a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">25 May 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="post post-list-sm square">
                      <div className="thumb rounded">
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/editor-side-2.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#">3 ways to remove dark spots naturally</a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">25 May 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="post post-list-sm square">
                      <div className="thumb rounded">
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/editor-side-3.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#">
                            Top 10 Interior designers for your dream home.
                          </a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">28 May 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="post post-list-sm square">
                      <div className="thumb rounded">
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/editor-side-4.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#"> Learn how to make desert at home. </a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">28 May 2021</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="spacer" data-height="50"></div>

              <div className="section-header">
                <h3 className="section-title">Trending</h3>
              </div>

              <div className="padding-30 rounded bordered">
                <div className="row gy-5">
                  <div className="col-sm-6">
                    <div className="post">
                      <div className="thumb rounded">
                        <a
                          href="#"
                          className="category-badge position-absolute"
                        >
                          Business
                        </a>
                        <span className="post-format">
                          <i class="fa-solid fa-share"></i>
                        </span>
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tren-lg-1.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <ul className="meta list-inline mt-4 mb-0">
                        <li className="list-inline-item">
                          <a href="#">
                            <img
                              src={require("../../assetsP/images/other/author-sm.jpg")}
                              className="author"
                              alt=""
                            />
                            Techie Coder
                          </a>
                        </li>
                        <li className="list-inline-item">24 May 2021</li>
                      </ul>
                      <h5 className="post-title mb-3 mt-3">
                        <a href="#">
                          Bitcoin investors lost $14.2bn in recent cypto crash
                        </a>
                      </h5>
                      <p className="excerpt mb-0">
                        This is Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Accusamus, id.
                      </p>
                    </div>

                    <div className="post post-list-sm square before-seperator">
                      <div className="thumb rounded">
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tren-sm-1.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#">
                            IPL 2021 to resume in sept 3rd week in UAE
                          </a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">25 May 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="post post-list-sm square before-seperator">
                      <div className="thumb rounded">
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tren-sm-2.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#">
                            HDFC Bank concerned over retail asset quality in
                            near-term
                          </a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">25 May 2021</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="post">
                      <div className="thumb rounded">
                        <a
                          href="#"
                          className="category-badge position-absolute"
                        >
                          Inspiration
                        </a>
                        <span className="post-format">
                          <i className="fa-solid fa-fire"></i>
                        </span>
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tren-lg-2.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <ul className="meta list-inline mt-4 mb-0">
                        <li className="list-inline-item">
                          <a href="#">
                            <img
                              src={require("../../assetsP/images/other/author-sm.jpg")}
                              className="author"
                              alt=""
                            />
                            Techie Coder
                          </a>
                        </li>
                        <li className="list-inline-item">29 May 2021</li>
                      </ul>
                      <h5 className="post-title mb-3 mt-3">
                        <a href="#">Spotify gives a discount for student</a>
                      </h5>
                      <p className="excerpt mb-0">
                        This is Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Accusamus, id.
                      </p>
                    </div>

                    <div className="post post-list-sm square before-seperator">
                      <div className="thumb rounded">
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tren-sm-3.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#">
                            Arogya ap to display vaccination status
                          </a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">25 May 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="post post-list-sm square before-seperator">
                      <div className="thumb rounded">
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tren-sm-4.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#">
                            Petrol, diesel prices hiked again today.
                          </a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">25 May 2021</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="spacer" data-height="50"></div>

              {/* <div className="section-header">
                <h3 className="section-title">Inspiration</h3>
                <div className="slick-arrows-top">
                  <buttton
                    className="carousel-topNav-prev slick-custom-buttons"
                    type="button"
                    data-role="none"
                    aria-label="Previous"
                  >
                    <i className="icon-arrow-left"></i>
                  </buttton>
                  
                  <buttton
                    className="carousel-topNav-next slick-custom-buttons"
                    type="button"
                    data-role="none"
                    aria-label="Next"
                  >
                    <i className="icon-arrow-right"></i>
                  </buttton>
                </div>
              </div>

              <div className="row post-carousel-twoCol post-carousel">
                <div className="post post-over-content col-md-6">
                  <div className="details clearfix">
                    <a href="#" className="category-badge">
                      Entertainment
                    </a>
                    <h4 className="post-title">
                      <a href="#">Amazon prime video to coproduce "Ram Setu"</a>
                    </h4>
                    <ul className="meta list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#">Techie Coder</a>
                      </li>
                      <li className="list-inline-item">03 Jun 2021</li>
                    </ul>
                  </div>
                  <a href="#">
                    <div className="thumb rounded">
                      <div className="inner">
                        <img src="images/posts/insp-1.jpg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="post post-over-content col-md-6">
                  <div className="details clearfix">
                    <a href="#" className="category-badge">
                      Technology
                    </a>
                    <h4 className="post-title">
                      <a href="#">
                        How to prepare your Google account afterlife.
                      </a>
                    </h4>
                    <ul className="meta list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#">Techie Coder</a>
                      </li>
                      <li className="list-inline-item">02 Jun 2021</li>
                    </ul>
                  </div>
                  <a href="#">
                    <div className="thumb rounded">
                      <div className="inner">
                        <img src="images/posts/insp-2.jpg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="post post-over-content col-md-6">
                  <div className="details clearfix">
                    <a href="#" className="category-badge">
                      Education
                    </a>
                    <h4 className="post-title">
                      <a href="#">
                        Learn from top B-Schools at 1/10th the fee: upGrad
                      </a>
                    </h4>
                    <ul className="meta list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#">Techie Coder</a>
                      </li>
                      <li className="list-inline-item">01 Jun 2021</li>
                    </ul>
                  </div>
                  <a href="#">
                    <div className="thumb rounded">
                      <div className="inner">
                        <img src="images/posts/insp-3.jpg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              </div> */}

              <div className="spacer" data-height="50"></div>

              <div className="section-header">
                <h3 className="section-title">Latest Posts</h3>
              </div>

              <div className="padding-30 rounded bordered">
                <div className="row">
                  <div className="col-md-12 col-sm-6">
                    {/* <!-- post  --> */}
                    <div className="post post-list clearfix">
                      <div className="thumb rounded">
                        <span className="post-format-sm">
                          <i className="fa-solid fa-share"></i>
                        </span>
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/latest-1.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details">
                        <ul className="meta list-inline mb-3">
                          <li className="list-inline-item">
                            <a href="#">
                              <img
                                src={require("../../assetsP/images/other/author-sm.jpg")}
                                className="author"
                                alt=""
                              />
                              Techie Coder
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Trending</a>
                          </li>
                          <li className="list-inline-item">26 May 2021</li>
                        </ul>
                        <h5 className="post-tile">
                          <a href="#">
                            360-seater plane flies to Dubai from Mumbai with
                            only 1 Passenger
                          </a>
                        </h5>
                        <p className="excerpt mb-0">
                          This is Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Modi, iure.
                        </p>
                        <div className="post-bottom clearfix d-flex align-items-center">
                          <div className="social-share me-auto">
                            <button className="toggle-button icon-share"></button>
                            <ul className="icons list-unstyled list-inline mb-0">
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="fa-brands fa-facebook-f"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="fa-brands fa-x-twitter"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="fa-brands fa-linkedin"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="fab fa-pinterest"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="fab fa-telegram-plane"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i class="fa-solid fa-envelope"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="more-button float-end">
                            <a href="#">
                              <span className="icon-options"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-6">
                    {/* <!-- post  --> */}
                    <div className="post post-list clearfix">
                      <div className="thumb rounded">
                        <span className="post-format-sm">
                          <i className="fa-solid fa-share"></i>
                        </span>
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/latest-2.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details">
                        <ul className="meta list-inline mb-3">
                          <li className="list-inline-item">
                            <a href="#">
                              <img
                                src={require("../../assetsP/images/other/author-sm.jpg")}
                                className="author"
                                alt=""
                              />
                              Techie Coder
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Technology</a>
                          </li>
                          <li className="list-inline-item">26 May 2021</li>
                        </ul>
                        <h5 className="post-tile">
                          <a href="#">
                            MS-teams to enhancce user experience with dev
                            updates
                          </a>
                        </h5>
                        <p className="excerpt mb-0">
                          This is Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Modi, iure.
                        </p>
                        <div className="post-bottom clearfix d-flex align-items-center">
                          <div className="social-share me-auto">
                            <button className="toggle-button icon-share"></button>
                            <ul className="icons list-unstyled list-inline mb-0">
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
                                  <i className="fab fa-linkedin-in"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="fab fa-pinterest"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="fab fa-telegram-plane"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="far fa-envelope"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="more-button float-end">
                            <a href="#">
                              <span className="icon-options"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-6">
                    {/* <!-- post  --> */}
                    <div className="post post-list clearfix">
                      <div className="thumb rounded">
                        <span className="post-format-sm">
                          <i className="fa-solid fa-share"></i>
                        </span>
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/latest-3.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details">
                        <ul className="meta list-inline mb-3">
                          <li className="list-inline-item">
                            <a href="#">
                              <img
                                src={require("../../assetsP/images/other/author-sm.jpg")}
                                className="author"
                                alt=""
                              />
                              Techie Coder
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Technology</a>
                          </li>
                          <li className="list-inline-item">26 May 2021</li>
                        </ul>
                        <h5 className="post-tile">
                          <a href="#">
                            India responds to whatsapp, says no intention to
                            violate ROP.
                          </a>
                        </h5>
                        <p className="excerpt mb-0">
                          This is Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Modi, iure.
                        </p>
                        <div className="post-bottom clearfix d-flex align-items-center">
                          <div className="social-share me-auto">
                            <button className="toggle-button icon-share"></button>
                            <ul className="icons list-unstyled list-inline mb-0">
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
                                  <i className="fab fa-linkedin-in"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="fab fa-pinterest"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="fab fa-telegram-plane"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="far fa-envelope"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="more-button float-end">
                            <a href="#">
                              <span className="icon-options"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-6">
                    {/* <!-- post  --> */}
                    <div className="post post-list clearfix">
                      <div className="thumb rounded">
                        <span className="post-format-sm">
                          <i className="fa-solid fa-share"></i>
                        </span>
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/latest-4.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details">
                        <ul className="meta list-inline mb-3">
                          <li className="list-inline-item">
                            <a href="#">
                              <img
                                src={require("../../assetsP/images/other/author-sm.jpg")}
                                className="author"
                                alt=""
                              />
                              Techie Coder
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Finance</a>
                          </li>
                          <li className="list-inline-item">26 May 2021</li>
                        </ul>
                        <h5 className="post-tile">
                          <a href="#">
                            Sensex closes 380pts higher, Nifty at 15,302; metal,
                            power drag
                          </a>
                        </h5>
                        <p className="excerpt mb-0">
                          This is Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Modi, iure.
                        </p>
                        <div className="post-bottom clearfix d-flex align-items-center">
                          <div className="social-share me-auto">
                            <button className="toggle-button icon-share"></button>
                            <ul className="icons list-unstyled list-inline mb-0">
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
                                  <i className="fab fa-linkedin-in"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="fab fa-pinterest"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="fab fa-telegram-plane"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="far fa-envelope"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="more-button float-end">
                            <a href="#">
                              <span className="icon-options"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button className="btn btn-simple">Load More</button>
                  </div>
                </div>
              </div>
              {/* <!-- left part over here  --> */}
            </div>
            {/* <!-- right part starts from here  --> */}

            <div className="col-lg-4 scroll_sidebar position-relative">
              <div className="sidebar rounded bordered">
                <div className="widget rounded">
                  <div className="widget-about text-center">
                    <h5 className="logo">K-ADI</h5>
                    <p className="mb-4" style={{ textAlign: "justify" }}>
                      This is Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Dolores tempora accusantium culpa deleniti nesciunt
                      repellat quisquam quos vero. Esse itaque est optio nostrum
                      porro quisquam nihil reprehenderit fugiat enim non.
                    </p>
                    <ul className="social-icons list-unstyled list-inline mb-0">
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
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fab fa-pinterest"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fab fa-telegram-plane"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="far fa-envelope"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="widget rounded">
                  <div className="widget-header text-center">
                    <h3 className="widget-title">Popular Posts</h3>
                  </div>
                  <div className="widget-content">
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <span className="number">1</span>
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tabs-1.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#">Bitcoin price raise after sudden fall</a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">30 May 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <span className="number">2</span>
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tabs-2.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#">
                            Clubhouse Crosses 1Mn Downloads On Play Store
                          </a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">30 May 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <span className="number">3</span>
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tabs-3.jpg")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#">Check current Gold Price of 24k</a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">30 May 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <span className="number">4</span>
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tabs-4.png")}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#">Improve your mails with Grammarly</a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">30 May 2021</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="widget rounded">
                  <div className="widget-header text-center">
                    <h3 className="widget-title">Explore Topics</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="list">
                      <li>
                        <a href="#">Trending</a>
                        <span>(7)</span>
                      </li>
                      <li>
                        <a href="#">Politics</a>
                        <span>(5)</span>
                      </li>
                      <li>
                        <a href="#">Fashion</a>
                        <span>(1)</span>
                      </li>
                      <li>
                        <a href="#">Lifestyle</a>
                        <span>(9)</span>
                      </li>
                      <li>
                        <a href="#">Inspiration</a>
                        <span>(2)</span>
                      </li>
                      <li>
                        <a href="#">Culture</a>
                        <span>(4)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="widget rounded">
                  <div className="widget-header text-center">
                    <h3 className="widget-title">Newsletter</h3>
                  </div>
                  <div className="widget-content">
                    <span className="newsletter-headline text-center mb-3">
                      Join 50,000 subscribers
                    </span>
                    <form action="#">
                      <div className="mb-2">
                        <input
                          type="email"
                          className="form-control w-100 text-center"
                          placeholder="Email address..."
                        />
                      </div>
                      <button className="btn btn-default btn-full">
                        Sign Up
                      </button>
                    </form>
                    <span className="newsletter-privacy text-center mt-3">
                      By signing up, you agree to our
                      <a href="#">Privacy policy</a>
                    </span>
                  </div>
                </div>

                <div className="widget rounded">
                  <div className="widget-header text-center">
                    <h3 className="widget-title">COVID-19</h3>
                  </div>
                  <div className="widget-content">
                    <div className="post-carousel-widget">
                      <div className="post post-carousel">
                        <div className="thumb rounded">
                          <a
                            href="#"
                            className="category-badge position-absolute"
                          >
                            COVID-19
                          </a>
                          <a href="#">
                            <div className="inner">
                              <img
                                src={require("../../assetsP/images/posts/wid-1.jpg")}
                                alt=""
                              />
                            </div>
                          </a>
                        </div>
                        <h5 className="post-title mb-0 mt-4">
                          <a href="#">
                            10 Things to do for being safe of corona
                          </a>
                        </h5>
                        <ul className="meta list-inline mt-2 mb-0">
                          <li className="list-inline-item">
                            <a href="#">Techie Coder</a>
                          </li>
                          <li className="list-inline-item">29 March 2021</li>
                        </ul>
                      </div>
                      <div className="post post-carousel">
                        <div className="thumb rounded">
                          <a
                            href="#"
                            className="category-badge position-absolute"
                          >
                            COVID-19
                          </a>
                          <a href="#">
                            <div className="inner">
                              <img
                                src={require("../../assetsP/images/posts/wid-2.jpg")}
                                alt=""
                              />
                            </div>
                          </a>
                        </div>
                        <h5 className="post-title mb-0 mt-4">
                          <a href="#">
                            Wash your hands after certain interval of time.
                          </a>
                        </h5>
                        <ul className="meta list-inline mt-2 mb-0">
                          <li className="list-inline-item">
                            <a href="#">Techie Coder</a>
                          </li>
                          <li className="list-inline-item">29 March 2021</li>
                        </ul>
                      </div>
                      <div className="post post-carousel">
                        <div className="thumb rounded">
                          <a
                            href="#"
                            className="category-badge position-absolute"
                          >
                            COVID-19
                          </a>
                          <a href="#">
                            <div className="inner">
                              <img
                                src={require("../../assetsP/images/posts/wid-3.jpg")}
                                alt=""
                              />
                            </div>
                          </a>
                        </div>
                        <h5 className="post-title mb-0 mt-4">
                          <a href="#">
                            Get vaccinated to stop the chain of corona
                          </a>
                        </h5>
                        <ul className="meta list-inline mt-2 mb-0">
                          <li className="list-inline-item">
                            <a href="#">Techie Coder</a>
                          </li>
                          <li className="list-inline-item">29 March 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="slick-arrows-bot">
                      <buttton
                        className="carousel-botNav-prev slick-custom-buttons"
                        type="button"
                        data-role="none"
                        aria-label="Previous"
                      >
                        <i className="icon-arrow-left"></i>
                      </buttton>
                      <buttton
                        className="carousel-botNav-next slick-custom-buttons"
                        type="button"
                        data-role="none"
                        aria-label="Next"
                      >
                        <i className="icon-arrow-right"></i>
                      </buttton>
                    </div>
                  </div>
                </div>

                <div className="widget rounded">
                  <div className="widget-header text-center">
                    <h3 className="widget-title">Tag Clouds</h3>
                  </div>
                  <div className="widget-content">
                    <a href="#" className="tag">
                      #Trending
                    </a>
                    <a href="#" className="tag">
                      #Cooking
                    </a>
                    <a href="#" className="tag">
                      #Featured
                    </a>
                    <a href="#" className="tag">
                      #Beauty
                    </a>
                    <a href="#" className="tag">
                      #Finance
                    </a>
                    <a href="#" className="tag">
                      #Celebrities
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
