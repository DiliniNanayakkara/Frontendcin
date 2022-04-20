import { React, useEffect, useState } from "react";
import "../Pages/Contactus.css";
import contact from "../../images/Contact.png";
import contactr from "../../images/contact.jpg";
function Contact() {
  return (
    <div>
      <div className="wrapper">
        <div className="wrappercontent"></div>
        <section>
          <img src={contact} className="webcontact" style={{ width: "100%" }} />
          <div class="top-left px-5">
            <p className="servicestopiccontact">Contact Us</p>
            <div className="linecontact"></div>
            <p className="servicessmalltext">Something you have to know</p>
          </div>
          <div class="centered px-1">
            <img
              src={contactr}
              className="rescontact"
              style={{ width: "100%" }}
            />
            <p className="centeredtopic">Contact Us</p>
            <center>
              <div className="cline"></div>
            </center>
          </div>
        </section>
        <section>
          <div class="contactcontainer container">
            <div class="row g-2">
              <div class="contactuscontent col-6 px-2">
                <div class="Contactinfo p-3 ">
                  <p className="Contactsmalltext">Get in Touch With Us</p>
                  <p className="Contactlargtext">
                    Contact Us for any questions !
                  </p>
                  <p className="Contactmediamtext">
                    You can contact us anytime for Inquiries So we are always
                    there to help you and keep in touch with you
                  </p>
                </div>
              </div>
              <div class="contactuscontent col-6">
                <div class="p-3  py-5">
                  <div class="mb-1 px-2">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div class="mb-1 px-2">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div class="mb-1 px-2">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Type Message"
                    ></textarea>
                  </div>

                  <button type="submit" class="messagebtn">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
