import React from "react";
import "../../assetsP/css/hero.css";

const HeroSec = () => {
  return (
    <>
      <section id="hero" className="mainHero">
        <div className="container-xl">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="post featured-post-lg">
                <div className="details clearfix">
                  <a href="#" className="category-badge">
                    Finance
                  </a>
                  <h2 className="post-title">
                    <a href="#">
                      3 Things to avoid while investing in stock market as a
                      beginner
                    </a>
                  </h2>
                  <ul className="meta list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="#">Techie Coder</a>
                    </li>
                    <li className="list-inline-item">30 May 2021</li>
                  </ul>
                </div>
                <a href="#">
                  <div className="thumb rounded">
                    <img
                      className="inner data-bg-image"
                      src={require("../../assetsP/images/posts/featured-lg.jpg")}
                    ></img>
                  </div>
                </a>
              </div>
            </div>

            {/* sidebar */}
            <div className="col-lg-4">
              <div className="post-tabs rounded bordered">
                <ul
                  className="nav nav-tabs nav-pills nav-fill"
                  id="postTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      aria-controls="popular"
                      aria-selected="true"
                      className="nav-link active"
                      data-bs-target="#popular"
                      data-bs-toggle="tab"
                      id="popular-tab"
                      role="tab"
                      type="button"
                    >
                      Popular
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      aria-controls="recent"
                      aria-selected="false"
                      className="nav-link"
                      data-bs-target="#recent"
                      data-bs-toggle="tab"
                      id="recent-tab"
                      role="tab"
                      type="button"
                    >
                      Recent
                    </button>
                  </li>
                </ul>

                {/* <!-- content  --> */}
                <div className="tab-content" id="postsTabContent">
                  {/* <!-- loader --> */}
                  <div className="lds-dual-ring"></div>
                  {/* <!-- pop post  --> */}

                  <div
                    className="tab-pane fade show active"
                    id="popular"
                    aria-labelledby="popular-tab"
                    role="tabpanel"
                  >
                    {/* <!-- post  --> */}
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tabs-1.jpg")}
                              alt="post"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#">Bitcoin price raise after sudden fall</a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">24 May 2021</li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- post2  --> */}
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tabs-2.jpg")}
                              alt="post"
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
                          <li className="list-inline-item">26 May 2021</li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- post3  --> */}
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tabs-3.jpg")}
                              alt="post"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#">Check current Gold Price of 24k</a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">28 May 2021</li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- post4  --> */}
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tabs-4.png")}
                              alt="post"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#">Improve your mails with Grammarly</a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">01 Jun 2021</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* <!-- recent  --> */}
                  <div
                    className="tab-pane fade"
                    id="recent"
                    aria-labelledby="recent-tab"
                    role="tabpanel"
                  >
                    {/* <!-- post  --> */}
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tabs-3.jpg")}
                              alt="post"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#">
                            Clubhouse breaking records of many apps
                          </a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">24 May 2021</li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- post2  --> */}
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tabs-2.jpg")}
                              alt="post"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#">At what age you should start investing</a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">26 May 2021</li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- post3  --> */}
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tabs-5.jpg")}
                              alt="post"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#">
                            Sonu sood foundation providing help in COVID-19
                          </a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">28 Jun 2021</li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- post4  --> */}
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <a href="#">
                          <div className="inner">
                            <img
                              src={require("../../assetsP/images/posts/tabs-2.jpg")}
                              alt="post"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="details clearfix">
                        <h6 className="post-title my-0">
                          <a href="#">
                            Should we invest in soverign gold bonds
                          </a>
                        </h6>
                        <ul className="meta list-inline mt-1 mb-0">
                          <li className="list-inline-item">04 Jun 2021</li>
                        </ul>
                      </div>
                    </div>
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

export default HeroSec;
