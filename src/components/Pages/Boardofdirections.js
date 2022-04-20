import React from "react";
import Members from "../../images/Members.png";
import profile1 from "../../images/profile1.jpg";
import Profile2 from "../../images/Profile2.jpg";
import profile3 from "../../images/profile3.jpg";
import Thilak from "../../images/Thilak.JPG";
import Kishu from "../../images/Kishu.JPG";
import profile from "../../images/profile.jpg";
import Nuwan from "../../images/Nuwan.jpg";
import Shereen from "../../images/Shereen.jpg";
import Act1 from "../../images/Act1.jpg";
import Act2 from "../../images/Act2.jfif";
import Act3 from "../../images/Act3.jpg";
import Act4 from "../../images/Act4.jpg";
import Act5 from "../../images/Act5.jpg";
import Act6 from "../../images/Act6.jpg";
import Act7 from "../../images/Act7.jfif";
import Act8 from "../../images/Act8.jpg";
import Act9 from "../../images/Act9.jpg";
import Act10 from "../../images/Act10.jpg";
import Act11 from "../../images/Act11.jpg";
import Act12 from "../../images/Act12.jpg";
import Act13 from "../../images/Act13.jpg";
import Act14 from "../../images/Act14.jpg";
import Act15 from "../../images/Act15.jpg";
import Act16 from "../../images/Act16.jfif";
import Act17 from "../../images/Act17.jpg";
import Act18 from "../../images/Act18.jfif";
import "../Pages/Members.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Boardofdirections() {
  return (
    <div>
      <div className="wrapper">
        <div className="wrappercontent"></div>
        <section>
          <img src={Members} style={{ width: "100%" }} />
          <div class="top-left px-5">
            <p className="servicestopic">Our Members</p>
            <div className="line"></div>
          </div>
          <div class="centered">
            <p className="centeredtopic">Our Members</p>
            <center>
              <div className="cline"></div>
            </center>
          </div>
        </section>
        <section>
          <div className="bheadingcontainer container">
            <div className="row justify-content-center">
              <div className="col">
                <p className="Boardheading">Board Of Directors</p>
                <div className="Boadheadingline"></div>
              </div>
            </div>
          </div>
          <center>
            <div class="Boardmembers container">
              <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <div class="col-3">
                  <div class="p-3a">
                    <div className="profilecon row justify-content-center">
                      <img className="profileimg" src={profile} />
                      <p className="Name">Dr.Jayantha Dharmadasa</p>
                      <p className="pos">Company Chairman</p>
                      <div className="viewprofbtn row justify-content-center">
                        <button className="viewprofile">View Profile</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="p-3">
                    <div className="profilecon row justify-content-center">
                      <img className="profileimg" src={profile} />
                      <p className="Name">Mr.M.W.B.Ganegala</p>
                      <p className="pos">Company Director</p>
                      <div className="viewprofbtn row justify-content-center">
                        <button className="viewprofile">View Profile</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="p-3">
                    <div className="profilecon row justify-content-center">
                      <img className="profileimg" src={Thilak} />
                      <p className="Name">Mr. Thilak Hewalakapuge</p>
                      <p className="pos">Company Director</p>
                      <div className="viewprofbtn row justify-content-center">
                        <button className="viewprofile">View Profile</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="p-3">
                    <div className="profilecon row justify-content-center">
                      <img className="profileimg" src={Kishu} />
                      <p className="Name">Dr.Kishu Gomes</p>
                      <p className="pos">Company Director</p>
                      <div className="viewprofbtn row justify-content-center">
                        <button className="viewprofile">View Profile</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="p-3">
                    <div className="profilecon row justify-content-center">
                      <img className="profileimg" src={Shereen} />
                      <p className="Name">Ms.Shereen Kumarathunga</p>
                      <p className="pos">Company Director</p>
                      <div className="viewprofbtn row justify-content-center">
                        <button className="viewprofile">View Profile</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="p-3">
                    <div className="profilecon row justify-content-center">
                      <img className="profileimg" src={profile} />
                      <p className="Name">Mr. Janaka Ambalagahawattha</p>
                      <p className="pos">Company Director</p>
                      <div className="viewprofbtn row justify-content-center">
                        <button className="viewprofile">View Profile</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-3">
                  <div class="p-3">
                    <div className="profilecon row justify-content-center">
                      <img className="profileimg" src={Nuwan} />
                      <p className="Name">Dr.Nuwan Nayanajith Kumara</p>
                      <p className="pos">Company Director</p>
                      <div className="viewprofbtn row justify-content-center">
                        <button className="viewprofile">View Profile</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </center>
          <div class="resBoardmembers container">
            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <div class="col">
                <div class="p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="profileimg" src={profile} />
                    <p className="Name">Dr.Jayantha Dharmadasa</p>
                    <p className="pos">Company Chairman</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="p-3 ">
                  <div className="profilecon row justify-content-center">
                    <img className="profileimg" src={profile} />
                    <p className="Name">Mr.W.B.Ganegala</p>
                    <p className="pos">Company Director</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="p-3 ">
                  <div className="profilecon row justify-content-center">
                    <img className="profileimg" src={Thilak} />
                    <p className="Name">Mr.Thilak Hewakapuge</p>
                    <p className="pos">Company Director</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="profileimg" src={Kishu} />
                    <p className="Name">Dr.Kishu Gomes</p>
                    <p className="pos">Company Director</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="profileimg" src={Shereen} />
                    <p className="Name">Mrs.Shereen Kumarathunga</p>
                    <p className="pos">Company Director</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="profileimg" src={profile} />
                    <p className="Name">Mr.Janaka Ambalagahawattha</p>
                    <p className="pos">Company Director</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="profileimg" src={Nuwan} />
                    <p className="Name">Dr.Nuwan Nayanajith Kumara</p>
                    <p className="pos">Company Director</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bheadingcontainer container">
            <div className="row justify-content-center">
              <div className="col">
                <p className="Boardheading">Our Artists</p>
                <div className="Boadheadingline"></div>
              </div>
            </div>
          </div>
          <div class="Artistlist container">
            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <div class="Actpro col-2">
                <div class="p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act1} />
                    <p className="aName">Mrs. Tharuka Wanniarachchi</p>
                    <p className="pos">Actress</p>
                    <div className="viewprofbtn row justify-content-center">
                      <a href="/artistprofile" className="viewprofile">
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Actpro col-2">
                <div class="p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act2} />
                    <p className="aName">Mrs.Damayanthi Fonseka</p>
                    <p className="pos">Actress</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Actpro col-2">
                <div class="p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act3} />
                    <p className="aName">Mrs Nilmini Tennakon</p>
                    <p className="pos">Actress</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Actpro col-2">
                <div class="p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act4} />
                    <p className="aName">Mr. Jackson Anthony</p>
                    <p className="pos">Actor</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Actpro col-2">
                <div class="p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act5} />
                    <p className="aName">Miss.Yashoda Wimaladharma</p>
                    <p className="pos">Actress</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Actpro col-2">
                <div class=" p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act6} />
                    <p className="aName">Miss. Shanudri Priyasad</p>
                    <p className="pos">Actress</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Actpro col-2">
                <div class=" p-3 ">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act7} />
                    <p className="aName">Mrs.Udari Perera</p>
                    <p className="pos">Actress</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Actpro col-2">
                <div class=" p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act8} />
                    <p className="aName">Mr.Hemal Ranasingha</p>
                    <p className="pos">Actor</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Actpro col-2">
                <div class=" p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act9} />
                    <p className="aName">Mr.Roshan Ranawaka</p>
                    <p className="pos">Actor</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Actpro col-2">
                <div class=" p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act10} />
                    <p className="aName">Mrs. Semini Iddamalgoda</p>
                    <p className="pos">Actress</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Actpro col-2">
                <div class=" p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act11} />
                    <p className="aName">Mr.Ravindra Randeniya</p>
                    <p className="pos">Actor</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Actpro col-2">
                <div class=" p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act12} />
                    <p className="aName">Mr.Uddika Premarathna</p>
                    <p className="pos">Actor</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Actpro col-2">
                <div class="p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act13} />
                    <p className="aName">Miss. Nilukshi Fernando</p>
                    <p className="pos">Actress</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Actpro col-2">
                <div class="p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act14} />
                    <p className="aName">Mr.Lucky Dias</p>
                    <p className="pos">Actor</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Actpro col-2">
                <div class="p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act15} />
                    <p className="aName">Miss. Vidushi Uththara</p>
                    <p className="pos">Actress</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Actpro col-2">
                <div class="p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act16} />
                    <p className="aName">Mr.Roshan Ravindra</p>
                    <p className="pos">Actor</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Actpro col-2">
                <div class="p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act17} />
                    <p className="aName">Miss.Shalani Tharaka</p>
                    <p className="pos">Actress</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Actpro col-2">
                <div class=" p-3">
                  <div className="profilecon row justify-content-center">
                    <img className="Aprofileimg" src={Act18} />
                    <p className="aName">Mr.kamal Addaraarachchi</p>
                    <p className="pos">Actor</p>
                    <div className="viewprofbtn row justify-content-center">
                      <button className="viewprofile">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Boardofdirections;
