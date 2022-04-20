import React from "react";
import ser1 from "../../images/ser1.jpg";
import ser2 from "../../images/ser2.jpg";
import ser3 from "../../images/ser3.jpg";
import ser4 from "../../images/ser4.jpg";
import ser5 from "../../images/ser5.jpg";
import ser6 from "../../images/ser6.jpg";
import ser7 from "../../images/ser7.jpg";
import ser8 from "../../images/ser8.jpg";
import hometop from "../../images/hometop.jpg";
import "../Pages/Home.css";
console.log(hometop);
function Home() {
  return (
    <div>
      <div className="wrapper">
        <div className="wrappercontent"> </div>
        <section className="top-section">
          <div className="container">
            <div className="row">
              <div className="hometoptext col-5 py-5 px-5">
                <p className="home-topic">About Cine Star Foundation</p>
                <p className="home-text">
                  Cine Star foundation is an organisation dedicated to the
                  Cinema industry and registered as a non-profit organization
                  with the Registrar of Companies. It has over 300 members
                  representing all aspects of the cinema industry.
                </p>
                <button className="more-info"> More Info</button>
              </div>
              <div className="hometopimg col-7 px-5">
                <img
                  className="hometopimgbor img-fluid"
                  src={hometop}
                  alt="Responsive image"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="card text-center">
            <div className="card-body">
              <p className="card-texth">We Serve to Cinema and Nation</p>
              <h5 className="card-titleh">Services & Operations</h5>
              <div>
                <center>
                  <p className="card-texth2 ">
                    We have an ongoing strategy for the Film Industry in Sri
                    Lanka and to serve better to light up many lives and give
                    them hope of living a better life
                  </p>
                </center>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="imggallery row">
              <div className="largleftimg col px-md-5">
                <img
                  src="https://www.cinestarfoundation.com/wp-content/uploads/sites/2/2020/05/post-4.jpg"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="servicesv col px-md-5">
                <div class="row">
                  <p className="servicesimgtopic">Services for the Society</p>
                  <p className="servicestext">
                    We have an ongoing strategy for the Film Industry in Sri
                    Lanka and to serve better to light up many lives and give
                    them hope of living a better life
                  </p>
                  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                      src={ser1}
                      class="servicesimages w-100 shadow-1-strong rounded mb-4"
                      alt="Boat on Calm Water"
                    />

                    <img
                      src={ser2}
                      class="servicesimages w-100 shadow-1-strong rounded mb-4"
                      alt="Wintry Mountain Landscape"
                    />
                  </div>

                  <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                      src={ser3}
                      class="servicesimages w-100 shadow-1-strong rounded mb-4"
                      alt="Mountains in the Clouds"
                    />

                    <img
                      src={ser4}
                      class="servicesimages w-100 shadow-1-strong rounded mb-4"
                      alt="Boat on Calm Water"
                    />
                  </div>

                  <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                      src={ser5}
                      class="servicesimages w-100 shadow-1-strong rounded mb-4"
                      alt="Waves at Sea"
                    />

                    <img
                      src={ser8}
                      class="servicesimages w-100 shadow-1-strong rounded mb-4"
                      alt="Yosemite National Park"
                    />
                  </div>
                  <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                      src={ser6}
                      class="servicesimages w-100 shadow-1-strong rounded mb-4"
                      alt="Boat on Calm Water"
                    />
                  </div>
                  <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                      src={ser6}
                      class="servicesimages w-100 shadow-1-strong rounded mb-4"
                      alt="Boat on Calm Water"
                    />
                  </div>
                  <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                      src={ser7}
                      class="servicesimages w-100 shadow-1-strong rounded mb-4"
                      alt="Boat on Calm Water"
                    />
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

export default Home;
