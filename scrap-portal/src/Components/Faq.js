import React from "react";

export const Faq = () => {
  return (
    <div>
      <section id="faq" className="faq">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>F.A.Q</h2>
            <p>Frequently Asked Questions</p>
          </header>

          <div className="row">
            <div className="col-lg-6">
              {/* <!-- F.A.Q List 1--> */}
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      What is main purpose of scrapyard portal ?{" "}
                    </button>
                  </h2>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Our First Priority at scrap collector is Customer
                      Satisfaction which we try to achieve by giving the Best
                      Price, Accurate Weight (Electronic Weighting Machine) and
                      100% assurance of Recycling the Scrap Material Provided by
                      our Customers.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      What type of Scrap we sell on Scrap portal?{" "}
                    </button>
                  </h2>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      We purchase waste paper of all kinds at a fair price,
                      including newspapers, notebooks, magazines, steel, brass,
                      glass, iron, plastic, etc. Guarted to peek a scrap with in
                      24 hours.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      Why should i sold my householdscrap on scrap portal?
                    </button>
                  </h2>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      It reduces the use of raw materials, decreases
                      manufactures, conserves natural resources, provides
                      employment opportunities, and saves time, energy and
                      money.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {/* <!-- F.A.Q List 2--> */}
              <div className="accordion accordion-flush" id="faqlist2">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2-content-1"
                    >
                      How will scrap portal help me to sell my household items?
                    </button>
                  </h2>
                  <div
                    id="faq2-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist2"
                  >
                    <div className="accordion-body">
                      Simply register to scrapyard portal take a image of your
                      household scrap and upload on our website and provide
                      necessary details.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2-content-2"
                    >
                      This site purpose only use for sell scrap?
                    </button>
                  </h2>
                  <div
                    id="faq2-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist2"
                  >
                    <div className="accordion-body">
                      NO,if any user visit our website and they want such
                      uploded scrap item so they can easily buy product on our
                      website.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2-content-3"
                    >
                      Site Provide any Security for user?
                    </button>
                  </h2>
                  <div
                    id="faq2-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist2"
                  >
                    <div className="accordion-body">
                      These security certificates ensure to customers visiting
                      our website and serves as additional verification that our
                      site is safe.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
