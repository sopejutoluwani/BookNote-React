import React from "react";

function Header() {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5 div2 ">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="images/pexels-rumeysa-akbas-169328981-13567987.jpg"
              className="image1"
              alt="Bootstrap Themes"
            ></img>
          </div>
          <div className="col-lg-6">
            <h2>I'm Toluwani</h2>

            <p className="lead">
              here are books i’ve read in my lifetime. you can go through this
              page to see my notes and ratings of these books
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
