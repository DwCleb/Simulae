import React, { Fragment } from 'react';

const LandingHeader = () => {
  return (
    <Fragment>

      <header>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
              <div className="navbar-header"><a className="navbar-brand navbar-link" href="https://www.instagram.com/exp__designer/" target="_blank">Dize Design</a>
                  <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
              </div>
              <div className="collapse navbar-collapse" id="navcol-1">
                  <ul className="nav navbar-nav navbar-right">
                      <li role="presentation"><a href="#" className="scroll-link" data-id="page-top">Back to Top</a></li>
                  </ul>
              </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>sky climber's </h1>
              <p>Climb up with us. </p>
            </div>
            <div className="col-md-12">

              <section id="section05" className="demo arrow"><center>
              <h1></h1><a href="#" className="scroll-link" data-id="go"><span></span>Scroll Down</a></center></section>

            </div>
          </div>
        </div>
      </header>
      <section id="go">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>or make youre way</h1>
                    <p>Be Creative</p>
                </div>
            </div>
        </div>
    </section>
    </Fragment>

  );
};

export default LandingHeader;
