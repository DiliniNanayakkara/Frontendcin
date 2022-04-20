import React from "react";
import logo from "../../images/logo.png";
import "../Footer/footer.css";
function footer() {
  return (
    <div>
      <footer class="text-center text-lg-start bg-dark text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Cine star foundation official organizer
                </h6>
                <img src={logo} style={{ height: "100px" }} />
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i> 11th Floor, Specialists
                  Center,115, Sir James Peiris Mawatha, Colombo 2,Sri Lanka
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  info@cinestarfoundation.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> Office +94 112305060
                </p>
                <p>
                  <i class="fas fa-globe me-3"> www.cinestarfoundation.com</i>
                </p>
              </div>
              <div class="col-md-2 col-lg-3 col-xl-2 mx-auto mb-4">
                <form>
                  <div class="form-group">
                    <small id="emailHelp" className="form-text text-muted">
                      Please Subscribe to our News letter and get updated with
                      our latest news
                    </small>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    ></input>
                  </div>

                  <button type="submit" className="more-info">
                    Submit
                  </button>
                </form>
              </div>

              <div class="col-md-3 col-lg-3 col-xl-2 mx-auto mb-2">
                <div class="row">
                  <div class="col-lg-4 col-md-2 mb-2 mb-lg-0">
                    <img
                      src="https://www.cinestarfoundation.com/wp-content/uploads/sites/2/2020/05/Gallery/ok/Gall6L.jpg"
                      class="footerimg w-100 shadow-1-strong mb-2"
                      alt="Imge gallery"
                    />

                    <img
                      src="https://www.cinestarfoundation.com/wp-content/uploads/sites/2/2020/05/Gallery/ok/Gall5L.jpg"
                      class="footerimg w-100 shadow-1-strong mb-2"
                      alt="Imge gallery"
                    />
                  </div>

                  <div class="col-lg-4 mb-2 mb-lg-0">
                    <img
                      src="https://www.cinestarfoundation.com/wp-content/uploads/sites/2/2020/05/Gallery/ok/Gall3L.jpg"
                      class="footerimg w-100 shadow-1-strong  mb-2"
                      alt="Imge gallery"
                    />

                    <img
                      src="https://www.cinestarfoundation.com/wp-content/uploads/sites/2/2020/05/Gallery/ok/Gall4L.jpg"
                      class="footerimg w-100 shadow-1-strong mb-2"
                      alt="Imge gallery"
                    />
                  </div>

                  <div class="col-lg-4 mb-2 mb-lg-0">
                    <img
                      src="https://www.cinestarfoundation.com/wp-content/uploads/sites/2/2020/05/Gallery/ok/Gall8L.jpg"
                      class="footerimg w-100 shadow-1-strong mb-2"
                      alt="Imge gallery"
                    />

                    <img
                      src="https://www.cinestarfoundation.com/wp-content/uploads/sites/2/2020/05/Gallery/ok/Gall2L.jpg"
                      class="footerimg w-100 shadow-1-strong mb-4"
                      alt="Imge gallery"
                    />
                  </div>
                </div>
                <button className="more-info">View Gallery</button>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default footer;
