import React, { useEffect } from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EngineeringIcon from "@mui/icons-material/Engineering";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

import CountUp from "react-countup";

import Aos from "aos";
import "aos/dist/aos.css";

export const Count = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Our Values</h2>
          </header>
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <SentimentSatisfiedAltIcon
                  color="success"
                  sx={{ fontSize: 40 }}
                />
                <div className="mx-2">
                  <CountUp end={100} duration="3" />

                  <p>Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <SupportAgentIcon color="secondary" sx={{ fontSize: 40 }} />
                <div className="mx-2">
                  <CountUp end={120} duration="3" /> <p>Hr Of Support</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <EngineeringIcon color="action" sx={{ fontSize: 40 }} />
                <div className="mx-2">
                  <CountUp end={20} duration="3" /> <p>Hard Workers</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <TravelExploreIcon color="disabled" sx={{ fontSize: 40 }} />
                <div className="mx-2">
                  <CountUp end={5} duration="3" /> <p>+Eexperience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
