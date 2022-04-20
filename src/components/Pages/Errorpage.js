import React from "react";
import Error1 from "../../images/error1.gif";
import Error from "../../images/error.gif";
function ErrorPage() {
  return (
    <div>
      <div className="wrapper">
        <div className="wrappercontent"></div>
        <section>
          <center>
            {" "}
            <img src={Error} />
            <img src={Error1} />
          </center>
        </section>
      </div>
    </div>
  );
}

export default ErrorPage;
