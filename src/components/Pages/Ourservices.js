import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import services from "../../images/services.png";
import "../Pages/services.css";
import helping1 from "../../images/helping1.jpg";
import helping2 from "../../images/helping2.jpg";
import helping3 from "../../images/helping3.jpg";
import servicesimg1 from "../../images/servicesimg1.png";
import servicesimg2 from "../../images/servicesimg2.png";
function Ourservices() {
  return (
    <div>
      <div className="wrapper">
        <div className="wrappercontent"> </div>
        <section>
          <img src={services} style={{ width: "100%" }} />
          <div class="top-left px-5">
            <p className="servicestopic">Our Services</p>
            <div className="line"></div>
            <p className="servicessmalltext">A help to those who need it</p>
            <p className="servicestoptext">
              Each donation is an essential help which improves everyone's life
            </p>
          </div>
          <div class="centered">
            <p className="centeredtopic">Our Services</p>
            <center>
              <div className="cline"></div>
            </center>
            <p className="centeredsmalltext">A help to those who need it</p>
            <p className="centeredtext">
              Each donation is an essential help which improves everyone's life
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <div className=" row justify-content-center">
              <div className="services-card col-9">
                <div class="container ">
                  <div class="justify-content-center  row">
                    <div class="servicesmincard  col-4">
                      <div class=" p-1">
                        <div class="card">
                          <img
                            src={helping1}
                            class="card-img-top"
                            alt="..."
                          ></img>
                          <div class="card-body">
                            <h5 class="services-card-title card-title">
                              Helping Hand to Society
                            </h5>
                            <p class="services-card-text card-text">
                              Supported and participated to the opening
                              religious statues in Negombo, Katuwapitiya
                            </p>
                            <button class="view-details-services">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="servicesmincard col-4">
                      <div class="p-1 ">
                        <div class="card">
                          <img
                            src={helping2}
                            class="card-img-top"
                            alt="..."
                          ></img>
                          <div class="card-body">
                            <h5 class="services-card-title card-title">
                              Supporting for Religious Activities
                            </h5>
                            <p class="services-card-text card-text">
                              Foundation is provided the Helping hand to the
                              various people in the society to bright up their
                              lives
                            </p>
                            <button class="view-details-services">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="servicesmincard col-4">
                      <div class="p-1 ">
                        <div class="card">
                          <img
                            src={helping3}
                            class="card-img-top"
                            alt="..."
                          ></img>
                          <div class="card-body">
                            <h5 class="services-card-title card-title">
                              Donating a Home for a Family
                            </h5>
                            <p class="services-card-text card-text">
                              Foundation is provided the Helping hand to the
                              various people in the society to bright up their
                              lives
                            </p>
                            <button class="view-details-services">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="servicesdetails">
          <div class="row mx-md-n5 justify-content-center">
            <div class="detailsofservices col-6 px-md-5">
              <div class="servicesdetailsall p-5 ">
                <p className="servicesptext">Service for the Cinema industry</p>
                <p className="serviceshtopic">
                  Helping Hand for the Sri Lankan Cinema Industry
                </p>
                <p className="servicessmalltext">
                  Cine star foundation has provided utmost service for the
                  cinema industry in Sri Lanka. The big picture is motivating
                  and helping to Sri Lankan artist to serve more to the nation.​
                </p>
                <div className="alltags">
                  <div className="tagsline">
                    <div className="intext">
                      <p className="tagtext">
                        Motivation Events for Artist
                        <i class="redright fas fa-check"></i>
                      </p>
                    </div>
                  </div>
                  <div className="tagsline">
                    <div className="intext">
                      <p className="tagtext">
                        Various Facilities to Artist
                        <i class="redright fas fa-check"></i>
                      </p>
                    </div>
                  </div>
                  <div className="tagsline">
                    <div className="intext">
                      <p className="tagtext">
                        Organizing Redee Rayak Event
                        <i class="redright fas fa-check"></i>
                      </p>
                    </div>
                  </div>
                  <div className="tagsline">
                    <div className="intext">
                      <p className="tagtext">
                        Hospital Coverage for all the Artist
                        <i class="redright fas fa-check"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="detailsofservices col-6 px-md-5">
              <div class="p-3 ">
                <center>
                  <img className="servicesimg1" src={servicesimg1} />
                </center>
              </div>
            </div>
          </div>
        </section>
        <section className="servicesdetails">
          <div class="row mx-md-n5 justify-content-center">
            <div class="detailsofservices col-6 px-md-5">
              <div class="servicesdetailsall p-5 ">
                <p className="servicesptext">Service for the Cinema industry</p>
                <p className="serviceshtopic">
                  Cine Star Conducts Health Camp for Foundation Membership
                </p>
                <p className="servicessmalltext">
                  Cine Star foundation is an organisation dedicated to the
                  Cinema industry and registered as a non-profit organization
                  with the Registrar of Companies. It has over 300 members
                  representing all aspects of the cinema industry. In
                  conjunction with the 70 year anniversary celebrations of the
                  local cinema industry and the International Vesak Festival, a
                  health camp was conducted for the benefit of the Cine Star
                  foundation membership at the Nawaloka Hospital premises
                </p>
                <p className="servicessmalltext">
                  Heart centre, Physiotherapy, Physicians, Skin and cosmetic
                  centre, Gynaecologists, ENT consultants were among the many
                  medical units from the Nawalok Hospital who participated in
                  this special camp, going much beyond the basic medical
                  check-ups.
                </p>
              </div>
            </div>

            <div class="detailsofservices col-6 px-md-5">
              <div class="p-3 ">
                <center>
                  <img className="servicesimg1" src={servicesimg2} />
                </center>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Ourservices;
