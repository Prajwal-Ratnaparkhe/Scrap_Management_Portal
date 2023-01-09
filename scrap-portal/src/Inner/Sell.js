import React from "react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import InnerNav from "./InnerNav";
import { useState } from "react";
import axios, * as others from "axios";
// import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sell = () => {
  const test = sessionStorage.getItem("Auth Token");
  const navigate = useNavigate();

  if (!test) {
    navigate("/login");
  }

  ////////////////////////////////////////////////////////////////// For Pickup /////////////////////////////////

  const [newUser, setNewAuthor] = useState({
    sname: "",
    sdescription: "",
    semail: "",
    saddress: "",
    sphone: "",
    scategory: "",
  });

  const handleChange = (e) => {
    setNewAuthor({ ...newUser, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewAuthor({ ...newUser, photo: e.target.files[0] });
    console.log(newUser.photo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", newUser.photo);
    // formData.append('birthdate' , newUser.birthdate);
    formData.append("sname", newUser.sname);
    formData.append("semail", newUser.semail);
    formData.append("saddress", newUser.saddress);
    formData.append("sphone", newUser.sphone);
    formData.append("scategory", newUser.scategory);
    formData.append("sdescription", newUser.sdescription);

    console.log(newUser.photo);

    axios
      .post("http://localhost:5000/users/add", formData)
      .then((res) => {
        console.log(res);
        setNewAuthor({
          sname: "",
          sdescription: "",
          semail: "",
          saddress: "",
          sphone: "",
          scategory: "",
        });
        toast.success("Thanks for your responce");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };

  ////////////////////////////////////////////////////////////////// For Resell /////////////////////////////////
  const [resell, setResell] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",

    item_name: "",
    category: "",
    description: "",
    price: "",
    photo: "",
  });

  const resellChange = (e) => {
    setResell({ ...resell, [e.target.name]: e.target.value });
  };

  const resellPhoto = (e) => {
    setResell({ ...resell, photo: e.target.files[0] });
    console.log(resell.photo);
  };

  const resellSubmit = (e) => {
    e.preventDefault();

    const rformData = new FormData();
    //// For user who sell ////
    rformData.append("name", resell.name);
    rformData.append("email", resell.email);
    rformData.append("address", resell.address);
    rformData.append("phone", resell.phone);

    ///////For Item ///
    rformData.append("item_name", resell.item_name);
    rformData.append("price", resell.price);
    rformData.append("category", resell.category);
    rformData.append("description", resell.description);
    rformData.append("photo", resell.photo);

    console.log(resell.photo);

    axios
      .post("http://localhost:5000/reSell/addReSellProduct", rformData)
      .then((res) => {
        console.log(res);
        setResell({
          name: "",
          email: "",
          address: "",
          phone: "",
          item_name: "",
          category: "",
          description: "",
          price: "",
          photo: "",
        });
        toast.success("Thanks for your responce");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };

  return (
    <>
      <ToastContainer />
      <div style={{ backgroundColor: "#f5f7fb", marginBottom: "15px" }}>
        <div style={{ marginBottom: "20px" }}>
          <InnerNav />
        </div>

        <div className="outer">
          <Marquee pauseOnHover="true" loop={0}>
            Price:30 Price50 Price:30 Price50 Price:30 Price50 Price:30 Price50
            Price:30 Price50
          </Marquee>
        </div>

        <div
          className="container"
          style={{ border: "0.5px solid", marginTop:"15px" }}
        >
          <center>
            <ul
              className="nav nav-pills nav-justified mb-3"
              id="ex1"
              role="tablist"
              style={{ width: "60%" }}
            >
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="tab-scrap"
                  data-mdb-toggle="pill"
                  href="#pills-scrap"
                  role="tab"
                  aria-controls="pills-scrap"
                  aria-selected="true"
                >
                  Scrap
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="tab-resell"
                  data-mdb-toggle="pill"
                  href="#pills-resell"
                  role="tab"
                  aria-controls="pills-resell"
                  aria-selected="false"
                >
                  Re-sell
                </a>
              </li>
            </ul>
          </center>

          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="pills-scrap"
              role="tabpanel"
              aria-labelledby="tab-scrap"
            >
              <div
                className="formbold-main-wrapper"
                style={{ marginTop: "-60px" }}
              >
                <div className="formbold-form-wrapper">
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="formbold-form-title">
                      <h2 className="">Sell Your Scrap</h2>
                    </div>

                    <div className="formbold-mb-3">
                      <div>
                        <label for="firstname" className="formbold-form-label">
                          Full name
                        </label>
                        <input
                          type="text"
                          id="firstname"
                          className="formbold-form-input"
                          name="sname"
                          value={newUser.sname}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="formbold-input-flex">
                      <div>
                        <label for="email" className="formbold-form-label">
                          {" "}
                          Your Email{" "}
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="formbold-form-input"
                          name="semail"
                          value={newUser.semail}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label for="phone" className="formbold-form-label">
                          {" "}
                          Phone number{" "}
                        </label>
                        <input
                          type="text"
                          id="phone"
                          className="formbold-form-input"
                          name="sphone"
                          value={newUser.sphone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="formbold-mb-3">
                      <label for="address" className="formbold-form-label">
                        Your Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="formbold-form-input"
                        name="saddress"
                        value={newUser.saddress}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="formbold-mb-3">
                      <label for="address2" className="formbold-form-label">
                        Scrap Category
                      </label>
                      <input
                        type="text"
                        id="address2"
                        className="formbold-form-input"
                        name="scategory"
                        value={newUser.scategory}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="formbold-mb-3">
                      <div>
                        <label for="state" className="formbold-form-label">
                          {" "}
                          Scrap Description{" "}
                        </label>
                        <textarea
                          type="text"
                          id="state"
                          rows={4}
                          className="formbold-form-input"
                          name="sdescription"
                          value={newUser.sdescription}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <input
                      type="file"
                      accept=".png , .jpg , .jpeg"
                      name="photo"
                      onChange={handlePhoto}
                      required
                    />

                    <center>
                      {" "}
                      <button className="formbold-btn">Send</button>{" "}
                    </center>
                  </form>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="pills-resell"
              role="tabpanel"
              aria-labelledby="tab-resell"
            >
              <div
                className="formbold-main-wrapper"
                style={{ marginTop: "-60px" }}
              >
                <div className="formbold-form-wrapper">
                  <form onSubmit={resellSubmit} encType="multipart/form-data">
                    <div className="formbold-form-title">
                      <h2 className="">Resell Your Scrap</h2>
                    </div>

                    <div>
                      <label for="firstname" className="formbold-form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        className="formbold-form-input"
                        name="name"
                        value={resell.name}
                        onChange={resellChange}
                        required
                      />
                    </div>

                    <div className="formbold-input-flex">
                      <div>
                        <label for="email" className="formbold-form-label">
                          {" "}
                          Your Email{" "}
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="formbold-form-input"
                          name="email"
                          value={resell.email}
                          onChange={resellChange}
                          required
                        />
                      </div>
                      <div>
                        <label for="phone" className="formbold-form-label">
                          {" "}
                          Your Phone number{" "}
                        </label>
                        <input
                          type="number"
                          id="phone"
                          className="formbold-form-input"
                          name="phone"
                          value={resell.phone}
                          onChange={resellChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="formbold-mb-3">
                      <label for="address" className="formbold-form-label">
                        Your Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="formbold-form-input"
                        name="address"
                        value={resell.address}
                        onChange={resellChange}
                        required
                      />
                    </div>

                    {/* <div className="formbold-mb-3">
                      <label for="address2" className="formbold-form-label">
                        Street Address Line 2
                      </label>
                      <input
                        type="text"
                        name="address2"
                        id="address2"
                        className="formbold-form-input"
                      />
                    </div> */}

                    <div className="formbold-input-flex">
                      <div>
                        <label for="state" className="formbold-form-label">
                          {" "}
                          Product Name{" "}
                        </label>
                        <input
                          type="text"
                          id="state"
                          className="formbold-form-input"
                          name="item_name"
                          value={resell.item_name}
                          onChange={resellChange}
                          required
                        />
                      </div>
                      <div>
                        <label for="country" className="formbold-form-label">
                          {" "}
                          Product Category{" "}
                        </label>
                        <input
                          type="text"
                          id="country"
                          className="formbold-form-input"
                          name="category"
                          value={resell.category}
                          onChange={resellChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="formbold-input-flex">
                      <div>
                        <label for="post" className="formbold-form-label">
                          {" "}
                          Product Price{" "}
                        </label>
                        <input
                          type="text"
                          id="post"
                          className="formbold-form-input"
                          name="price"
                          value={resell.price}
                          onChange={resellChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label for="area" className="formbold-form-label">
                        {" "}
                        Product Description{" "}
                      </label>
                      <textarea
                        type="text"
                        rows={4}
                        id="area"
                        className="formbold-form-input"
                        name="description"
                        value={resell.description}
                        onChange={resellChange}
                        required
                      />
                    </div>

                    <input
                    style={{marginTop:"10px"}}
                      type="file"
                      accept=".png , .jpg , .jpeg"
                      name="photo"
                      onChange={resellPhoto}
                      required
                    />

                    <center>
                      {" "}
                      <button className="formbold-btn">Send</button>{" "}
                    </center>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sell;
