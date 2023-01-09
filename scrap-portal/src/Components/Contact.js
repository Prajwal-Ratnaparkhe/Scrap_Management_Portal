import React from "react";
import { useState } from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  let name, value;

  const postForm = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, subject, message } = userData;
    if (name && email && subject && message) {
      const res = await fetch(
        "https://scrap-management-portal-default-rtdb.firebaseio.com/Contact-Us.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        toast.success("Message sent successfully");
      } else {
        toast.error("Please enter data correctly");
      }
    } else {
      toast.error("Please enter data correctly");
    }
  };

  return (
    <div>
      <ToastContainer />
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-left">
          <header className="section-header">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </header>

          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-box">
                    <LocationOnIcon color="primary" sx={{ fontSize: 40 }} />
                    <h3>Address</h3>
                    <p>
                      Cidco N-6
                      <br />
                      Maharashtra{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <CallIcon color="primary" sx={{ fontSize: 40 }} />
                    <h3>Call Us</h3>
                    <p>
                      +91 100000000
                      <br />
                      +91 1000000
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <EmailOutlinedIcon color="primary" sx={{ fontSize: 40 }} />
                    <h3>Email Us</h3>
                    <p>
                      info@example.com
                      <br />
                      contact@example.com
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <WatchLaterOutlinedIcon
                      color="primary"
                      sx={{ fontSize: 40 }}
                    />
                    <h3>Open Hours</h3>
                    <p>
                      Monday - Friday
                      <br />
                      9:00AM - 05:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form className="php-email-form">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                      value={userData.name}
                      onChange={postForm}
                    />
                  </div>

                  <div className="col-md-6 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={userData.email}
                      onChange={postForm}
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                      value={userData.subject}
                      onChange={postForm}
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                      value={userData.message}
                      onChange={postForm}
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit" onClick={submitData}>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
