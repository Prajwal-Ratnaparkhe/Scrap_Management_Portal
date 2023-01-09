import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

import prajwal from "../team/prajwal.jpeg";
import sojwal from "../team/sojwal.jpg";
import chaitnya from "../team/chaitnya.jpeg"
import tushar from "../team/tushar.jpg"

const Team = () => {
  return (
    <>
      <section id="team" className="team">
        <div className="container" >
          <header className="section-header">
            <h2>Team</h2>
            <p>Our hard working team</p>
          </header>

          <div className="row gy-4">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img
                    src={prajwal}
                    className="img-fluid"
                    alt="Prajwal Ratnaparkhe"
                  />
                  <div className="social">
                    <a
                      href="https://instagram.com/prajwal_ratnaparkhe?utm_medium=copy_link "
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramIcon color="primary" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/prajwal-ratnaparkhe-55817620a/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInIcon color="primary" />
                    </a>
                    <a
                      href="https://www.facebook.com/prajwal.ratnaparkhe"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FacebookIcon color="primary" />
                    </a>
                    <a
                      href="https://github.com/Prajwal-Ratnaparkhe"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon color="primary" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Prajwal Ratnaparkhe</h4>
                  <span>Chief Executive Officer</span>
                
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img
                    src={sojwal}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="/">
                      <InstagramIcon color="primary" />
                    </a>
                    <a href="/">
                      <LinkedInIcon color="primary" />
                    </a>
                    <a href="/">
                      <FacebookIcon color="primary" />
                    </a>
                    <a href="/">
                      <GitHubIcon color="primary" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Sojwal Ingle</h4>
                  <span>Product Manager</span>
            
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img
                    src={tushar}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="/">
                      <InstagramIcon color="primary" />
                    </a>
                    <a href="/">
                      <LinkedInIcon color="primary" />
                    </a>
                    <a href="/">
                      <FacebookIcon color="primary" />
                    </a>
                    <a href="/">
                      <GitHubIcon color="primary" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Tushar Wagh</h4>
                  <span>CTO</span>
               
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img
                    src={chaitnya}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="/">
                      <InstagramIcon color="primary" />
                    </a>
                    <a href="/">
                      <LinkedInIcon color="primary" />
                    </a>
                    <a href="/">
                      <FacebookIcon color="primary" />
                    </a>
                    <a href="/">
                      <GitHubIcon color="primary" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Chaitnya Shelke</h4>
                  <span>CTO</span>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Team;
