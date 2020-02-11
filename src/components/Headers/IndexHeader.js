/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-light-blue"
        style={{
          backgroundImage:
            "url(" + require("assets/img/barbara_main_big.jpg") + ")",
          objectFit: "fill"
        }}
      >
        {/*<div className="filter" />*/}
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">BARBARA SHILÓVA</h1>

              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 style={{textAlign: "center"}}>
              <span className="presentation-subtitle text-center">
              Independent artist.<br />
              Currently in creative search.
                </span>
            </h2>
            <h1 className="presentation-title text-center">
              ▼
            </h1>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
