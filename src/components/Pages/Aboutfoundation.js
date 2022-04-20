import React from "react";
import Aboutusimg from "../../images/Aboutusimg.png";
import Aboutus from "../../images/Aboutus.png";

import "../Pages/Aboutus.css";
function About() {
  return (
    <div>
      <div className="wrapper">
        <div className="wrappercontent"> </div>
        <section>
          <img src={Aboutus} style={{ width: "100%" }} />
          <div class="top-left px-5">
            <p className="servicestopic">About US</p>
            <div className="line"></div>
            <p className="servicessmalltext">Something you have to know</p>
            <p className="servicestoptext">About us & Team</p>
          </div>
          <div class="centered">
            <p className="centeredtopic">About US</p>
            <center>
              <div className="cline"></div>
            </center>
            <p className="centeredsmalltext">Something you have to know</p>
            <p className="centeredtext">About us & Team</p>
          </div>
        </section>
        <section className="Aboutdetails">
          <div className="cantainer">
            <div className="row justify-content-center">
              <div className="col-10">
                <div class="row mx-md-n5">
                  <div class="aboutusleftimg col-5 px-md-2">
                    <div class="p-3 ">
                      <img className="Aboutusimg" src={Aboutusimg} />
                    </div>
                  </div>
                  <div class="aboutusrighttext col-7 px-md-2">
                    <div class="p-3 ">
                      <p className="aboutustext">
                        Ridee Reyak, brings you an unforgettable evening of
                        music, dance, glamour and entertainment. And the most
                        looked forwarded to Silver Carpet event Dialog Axiata
                        PLC, has over the years become one of the most
                        glamourous events on the local entertainment calendar.
                        The programme, showcased by the Cine Star Foundation for
                        the funds raise to support over 320 local cinema
                        artistes. The Cine Star Foundation, via funds generated
                        from the Ridee Reyak show, annually provides medical and
                        life insurance covers to its members and a monthly
                        stipend for deserving yester-year artistes.​
                      </p>
                      <p className="aboutustext">
                        In Ridee Rayak feature stars from young to veterans, who
                        will sing and dance to popular hits of today and
                        yesteryear. These include the likes of Ravindra
                        Randeniya, Malani Fonseka, Sriyani Amarasena, Cleetus
                        Mendis, Veena Jayakody, Jeewan Kumaranathunga, Sriyantha
                        Mendis, Dilhani Ekanayaka, Sangeetha Weeraratne, Channa
                        Perera, Jackson Anthony, Yashodha Wimaladharma, Bandu
                        Samarasinghe, Tennyson Cooray, Anusha Damayanthi,
                        Nilanthi Dias, Manjula Kumari, Upeksha Swarnamali,
                        Roshan Pilapitiya, Suraj Mapa, Saranga Disasekara,
                        Pubudu Chaturanga, Roshan Ranawana, Wasantha Kumarawila,
                        Giriraj Kaushalya, Chilie Thilanka, Vishwa Kodikara,
                        Sachini Ayendra, Dinakshi Priyasad, Sheshadri Priyasad,
                        Shanudhri Priyasad, Udari Perera, Shalani Tharaka, Ruwan
                        Wickramasinghe, Priyantha Wijekone, Udari
                        Warnakulasuriya, Senali Fonseka, Tharuka Wanniarachchi
                        Chulakshi Ranathunga and many more. The Channa Upuli
                        Dance troupe.
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
  );
}

export default About;
