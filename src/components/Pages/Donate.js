import React from "react";
import Aboutusimg from "../../images/Aboutusimg.png";
import Aboutus from "../../images/Aboutus.png";

import "../Pages/Aboutus.css";
function Donate() {
  return (
    <div>
      <div className="wrapper">
        <div className="wrappercontent"></div>
        <div class="container">
          <h2>Dynamic Tabs</h2>
          <p>
            To make the tabs toggleable, add the data-toggle="tab" attribute to
            each link. Then add a .tab-pane class with a unique ID for every tab
            and wrap them inside a div element with class .tab-content.
          </p>

          <ul class="nav nav-tabs">
            <li class="active">
              <a data-toggle="tab" href="#home">
                Home
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#menu1">
                Menu 1
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#menu2">
                Menu 2
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#menu3">
                Menu 3
              </a>
            </li>
          </ul>

          <div class="tab-content">
            <div id="home" class="tab-pane fade in active">
              <h3>HOME</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div id="menu1" class="tab-pane fade">
              <h3>Menu 1</h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div id="menu2" class="tab-pane fade">
              <h3>Menu 2</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
            <div id="menu3" class="tab-pane fade">
              <h3>Menu 3</h3>
              <p>
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>

        <div class="container p-5">
          <div class="row justify-content-md-center">
            <div className="checkoutformleft col p-5">
              <p className="shippingheader">Checkout</p>
              <p className="shippinginf">1. Shipping Information</p>
              <p className="shippingtext">
                Please enter your Shipping Address below. You will have the
                opportunity to select your Shipping Method next.
              </p>
              <form>
                <div class="form-row">
                  <div class="row">
                    <div class="checkoutformleft col-6">
                      <label
                        for="inputAddress"
                        className="checkoutformlable py-3"
                      >
                        *First Name
                      </label>
                      <input
                        type="text"
                        class="checkoutinput form-control p-2"
                        placeholder="First name"
                        required
                      />
                    </div>
                    <div class="col-6">
                      <label
                        for="inputAddress"
                        className=" checkoutformlable py-3"
                      >
                        *Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control p-2"
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress" className="checkoutformlable py-3">
                    Company Name :
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="inputAddress"
                    placeholder="Company Name"
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress2" className="checkoutformlable py-3">
                    *Phone :
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="inputAddress2"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress" className="checkoutformlable py-3">
                    *Street Address :
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="inputAddress"
                    placeholder="Street Address"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress" className="checkoutformlable py-3">
                    Address 2 :
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="inputAddress"
                    placeholder="Address 2"
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress" className="checkoutformlable py-3">
                    Suite :
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="inputAddress"
                    placeholder="Suite"
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress" className="checkoutformlable py-3">
                    *Country :
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="inputAddress"
                    placeholder="Country"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress" className="checkoutformlable py-3">
                    *City :
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="inputAddress"
                    placeholder="City"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress" className="checkoutformlable py-3">
                    *State/Province :
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="inputAddress"
                    placeholder="State or Province"
                    required
                  />
                </div>

                <button type="submit" class="continue   mt-3">
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
