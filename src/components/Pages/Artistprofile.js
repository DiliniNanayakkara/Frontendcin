import { React, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import coverimg from "../../images/coverimg.png";
import Act1 from "../../images/Act1.jpg";
import "../Pages/Profile.css";
import Footer from "../Footer/footer";
function Artistprofile() {
  return (
    <div>
      <div className="wrapper">
        <div className="wrappercontent"></div>
        <div className="profile-wrapper">
          <section>
            <div class="Profileimgclass">
              <img src={coverimg} style={{ width: "100%" }} />
              <div class="profileimgsmall">
                <img className="profileimgsmallpic" src={Act1} />
              </div>
              <div class="profileimgsmallres">
                <center>
                  {" "}
                  <center>
                    {" "}
                    <img className="profileimgsmallpicres" src={Act1} />
                  </center>
                </center>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div>
                <div class="row g-0">
                  <div class="col-md-5 px-3 py-3">
                    <div className="profilecontent">
                      <div className="profileleftdetails">
                        <p className="profileName">Tharuka Wanniarachchi</p>
                        <p className="profileleftcontent">
                          Why do we use it? It is a long established fact that a
                          reader will be distracted by the readable content of a
                          page when looking at its layout. The point of using
                          Lorem Ipsum is that it has a more-or-less normal
                          distribution of letters, as opposed to using 'Content
                          here, content here', making it look like readable
                          English. Many desktop publishing packages and web page
                          editors now use Lorem Ipsum as their default model
                          text, and a search for 'lorem ipsum' will uncover many
                          web sites still in their infancy. Various versions
                          have evolved over the years, sometimes by accident,
                          sometimes on purpose (injected humour and the like).
                        </p>
                        <p className="profileName">Skilles Field</p>
                        <button className="skillbtn">Dancing</button>
                        <button className="skillbtn">Actoring</button>
                        <button className="skillbtn">Running</button>
                        <button className="skillbtn">Traveling</button>
                        <button className="skillbtn">Dancing</button>
                        <button className="skillbtn">Actoring</button>
                        <button className="skillbtn">Running</button>
                        <button className="skillbtn">Traveling</button>
                      </div>
                    </div>
                  </div>
                  <div class=" col-md-7 px-3 py-3">
                    <div className="profilecontent">
                      {" "}
                      <div className="profilecontent">
                        <div className="profileleftdetails">
                          <ul className="liststyle">
                            <li className="photocount">&bull; 23 Photos</li>
                            <li className="photocount">&bull; 23 Photos</li>
                            <button className="seeall">See all</button>
                          </ul>
                        </div>
                        <div className="Topimages">
                          <section class="">
                            <section class="">
                              <div class="row">
                                <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                  <div
                                    class="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light"
                                  >
                                    <img
                                      src="https://1.bp.blogspot.com/-ZFMyYQWTVHY/Xju6y116xnI/AAAAAAAHK54/8SS_26K41kU6kcdotcjqZFEdZI4DJjPJACLcBGAsYHQ/s1600/56325202_842961869390226_9107079582497898496_o.jpg"
                                      class="topimglist w-100"
                                    />
                                    <a
                                      href="#!"
                                      data-mdb-toggle="modal"
                                      data-mdb-target="#exampleModal1"
                                    >
                                      <div class="mask"></div>
                                    </a>
                                  </div>
                                </div>

                                <div class="col-lg-3 mb-4 mb-lg-0">
                                  <div
                                    class="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light"
                                  >
                                    <img
                                      src="https://dailynews.lk/sites/default/files/news/2016/10/30/z_p33-Fillip-02.jpg"
                                      class="topimglist w-100"
                                    />
                                    <a
                                      href="#!"
                                      data-mdb-toggle="modal"
                                      data-mdb-target="#exampleModal2"
                                    >
                                      <div class="mask"></div>
                                    </a>
                                  </div>
                                </div>

                                <div class="col-lg-3 mb-4 mb-lg-0">
                                  <div
                                    class="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light"
                                  >
                                    <img
                                      src="http://dailynews.lk/sites/default/files/news/2016/10/30/z_p33-Fillip-05.jpg"
                                      class="topimglist w-100"
                                    />
                                    <a
                                      href="#!"
                                      data-mdb-toggle="modal"
                                      data-mdb-target="#exampleModal3"
                                    >
                                      <div class="mask"></div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-lg-3 mb-4 mb-lg-0">
                                  <div
                                    class="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light"
                                  >
                                    <img
                                      src="https://1.bp.blogspot.com/-Nb8ci2fWydc/XjunkioQNyI/AAAAAAAHK3k/Kb-WVMRd8yIOBwp-LB20sfrBHcVUyXkzACLcBGAsYHQ/s1600/tharuka_w_68828486_204314533899374_332803937124188919_n.jpg"
                                      class="topimglist w-100"
                                    />
                                    <a
                                      href="#!"
                                      data-mdb-toggle="modal"
                                      data-mdb-target="#exampleModal3"
                                    >
                                      <div class="mask"></div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </section>

                            <section class="">
                              <div
                                class="modal fade"
                                id="exampleModal1"
                                tabindex="-1"
                                aria-labelledby="exampleModal1Label"
                                aria-hidden="true"
                              >
                                <div class="modal-dialog modal-lg">
                                  <div class="modal-content">
                                    <div class="ratio ratio-16x9">
                                      <iframe
                                        src="https://www.youtube.com/embed/A3PDXmYoF5U"
                                        title="YouTube video"
                                        allowfullscreen
                                      ></iframe>
                                    </div>

                                    <div class="text-center py-3">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-mdb-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                class="modal fade"
                                id="exampleModal2"
                                tabindex="-1"
                                aria-labelledby="exampleModal2Label"
                                aria-hidden="true"
                              >
                                <div class="modal-dialog modal-lg">
                                  <div class="modal-content">
                                    <div class="ratio ratio-16x9">
                                      <iframe
                                        src="https://www.youtube.com/embed/wTcNtgA6gHs"
                                        title="YouTube video"
                                        allowfullscreen
                                      ></iframe>
                                    </div>

                                    <div class="text-center py-3">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-mdb-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                class="modal fade"
                                id="exampleModal3"
                                tabindex="-1"
                                aria-labelledby="exampleModal3Label"
                                aria-hidden="true"
                              >
                                <div class="modal-dialog modal-lg">
                                  <div class="modal-content">
                                    <div class="ratio ratio-16x9">
                                      <iframe
                                        src="https://www.youtube.com/embed/vlDzYIIOYmM"
                                        title="YouTube video"
                                        allowfullscreen
                                      ></iframe>
                                    </div>

                                    <div class="text-center py-3">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-mdb-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </section>
                        </div>
                        <table className="skilltable table">
                          <thead>
                            <tr>
                              <th className="skilltablh" scope="col">
                                Exprience
                              </th>
                              <th className="skilltablh" scope="col">
                                Skills
                              </th>
                              <th className="skilltablh" scope="col">
                                Awards
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="skilltabld">9 Years</td>
                              <td className="skilltabld">23</td>
                              <td className="skilltabld">2</td>
                            </tr>
                          </tbody>
                        </table>
                        <table class="table">
                          <thead></thead>
                          <tbody>
                            <tr>
                              <th className="skilltablh" scope="row">
                                Name :
                              </th>
                              <td className="skilltabld">
                                Tharuka Wanniarachchi
                              </td>
                            </tr>
                            <tr>
                              <th className="skilltablh" scope="row">
                                Address :
                              </th>
                              <td className="skilltabld">No 12, Colombo 3</td>
                            </tr>
                            <tr>
                              <th className="skilltablh" skilltablh scope="row">
                                Temporary Address :
                              </th>
                              <td className="skilltabld">No 12, Colombo 3</td>
                            </tr>
                            <tr>
                              <th className="skilltablh" skilltablh scope="row">
                                Contact No :
                              </th>
                              <td className="skilltabld">
                                Personal - 07700000
                              </td>
                              <td className="skilltabld">Office - 07700000</td>
                            </tr>
                            <tr>
                              <th className="skilltablh" skilltablh scope="row">
                                NIC No :
                              </th>
                              <td className="skilltabld">9012839102V</td>
                            </tr>
                            <tr>
                              <th className="skilltablh" skilltablh scope="row">
                                Status :
                              </th>
                              <td className="skilltabld">Married</td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="profileName">
                          Services for Local Film Industry
                        </p>
                        <section class="">
                          <section class="">
                            <div class="row">
                              <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                <div
                                  class="bg-image hover-overlay ripple shadow-1-strong rounded"
                                  data-ripple-color="light"
                                >
                                  <img
                                    src="https://dailynews.lk/sites/default/files/news/2016/10/30/z_p33-Fillip-07.jpg"
                                    class="topimglist w-100"
                                  />
                                  <a
                                    href="#!"
                                    data-mdb-toggle="modal"
                                    data-mdb-target="#exampleModal1"
                                  >
                                    <div class="mask"></div>
                                  </a>
                                </div>
                              </div>

                              <div class="col-lg-3 mb-4 mb-lg-0">
                                <div
                                  class="bg-image hover-overlay ripple shadow-1-strong rounded"
                                  data-ripple-color="light"
                                >
                                  <img
                                    src="http://dailynews.lk/sites/default/files/news/2016/10/30/z_p33-Fillip-03.jpg"
                                    class="topimglist w-100"
                                  />
                                  <a
                                    href="#!"
                                    data-mdb-toggle="modal"
                                    data-mdb-target="#exampleModal2"
                                  >
                                    <div class="mask"></div>
                                  </a>
                                </div>
                              </div>

                              <div class="col-lg-3 mb-4 mb-lg-0">
                                <div
                                  class="bg-image hover-overlay ripple shadow-1-strong rounded"
                                  data-ripple-color="light"
                                >
                                  <img
                                    src="http://dailynews.lk/sites/default/files/news/2016/10/30/z_p33-Fillip-05.jpg"
                                    class="topimglist w-100"
                                  />
                                  <a
                                    href="#!"
                                    data-mdb-toggle="modal"
                                    data-mdb-target="#exampleModal3"
                                  >
                                    <div class="mask"></div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 mb-4 mb-lg-0">
                                <div
                                  class="bg-image hover-overlay ripple shadow-1-strong rounded"
                                  data-ripple-color="light"
                                >
                                  <img
                                    src="https://1.bp.blogspot.com/-Nb8ci2fWydc/XjunkioQNyI/AAAAAAAHK3k/Kb-WVMRd8yIOBwp-LB20sfrBHcVUyXkzACLcBGAsYHQ/s1600/tharuka_w_68828486_204314533899374_332803937124188919_n.jpg"
                                    class="topimglist w-100"
                                  />
                                  <a
                                    href="#!"
                                    data-mdb-toggle="modal"
                                    data-mdb-target="#exampleModal3"
                                  >
                                    <div class="mask"></div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </section>

                          <section class="">
                            <div
                              class="modal fade"
                              id="exampleModal1"
                              tabindex="-1"
                              aria-labelledby="exampleModal1Label"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                  <div class="ratio ratio-16x9">
                                    <iframe
                                      src="https://www.youtube.com/embed/A3PDXmYoF5U"
                                      title="YouTube video"
                                      allowfullscreen
                                    ></iframe>
                                  </div>

                                  <div class="text-center py-3">
                                    <button
                                      type="button"
                                      class="btn btn-secondary"
                                      data-mdb-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="modal fade"
                              id="exampleModal2"
                              tabindex="-1"
                              aria-labelledby="exampleModal2Label"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                  <div class="ratio ratio-16x9">
                                    <iframe
                                      src="https://www.youtube.com/embed/wTcNtgA6gHs"
                                      title="YouTube video"
                                      allowfullscreen
                                    ></iframe>
                                  </div>

                                  <div class="text-center py-3">
                                    <button
                                      type="button"
                                      class="btn btn-secondary"
                                      data-mdb-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="modal fade"
                              id="exampleModal3"
                              tabindex="-1"
                              aria-labelledby="exampleModal3Label"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                  <div class="ratio ratio-16x9">
                                    <iframe
                                      src="https://www.youtube.com/embed/vlDzYIIOYmM"
                                      title="YouTube video"
                                      allowfullscreen
                                    ></iframe>
                                  </div>

                                  <div class="text-center py-3">
                                    <button
                                      type="button"
                                      class="btn btn-secondary"
                                      data-mdb-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </section>
                        <p className="filmindustry">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Artistprofile;
