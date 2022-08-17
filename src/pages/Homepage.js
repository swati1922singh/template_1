import React from "react";
import Card_1 from "../components/Card_1";
import Card_3 from "../components/Card_3";
import Card_2 from "../components/Card_2";
import Left_text from "../components/Left_text";
import Cards_8 from "../components/Card_8";
import "../style/Style.css";
import {
  Cardsvg1,
  Cardsvg2,
  Cardsvg3,
  Cardsvg4,
  Cardsvg5,
  Cardsvg6,
  Cardsvg7,
  Cardsvg8,
  Svg,
} from "../components/svg";
// import Navbar from '../../components/navbar'

import "../style/Style.css";
import Button from "@mui/material/Button";
import Email_Icon from "@mui/icons-material/Email";
import Right_text from "../components/Right_text";
import Navbar from "../pages/Navbar";
const Homepage = () => {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <div className="container">
          <div className="hero">
            <div className="text-section">
              <h3 className="heading1">
                AI-powered
                <br />
                advertising tech to
                <br /> grow your business
              </h3>
              <p className="paragraph1">
                Algorithmically optimize bids, build campaigns, and automate
                your keyword workflows"
              </p>
              <div className="buttons">
                <button className="button is-primary btn1">Free Trail</button>
                <button className="button is-primary btn2">Demo</button>
              </div>
            </div>
            <div className="video-section">
              <div className="video">
                <img
                  src="https://vulk.cssninja.io/assets/illustrations/hero/laptop-woman.svg"
                  className="image"
                />
              </div>
            </div>
          </div>
          <div className="company-logo">
            <Svg image="https://vulk.cssninja.io/assets/brands/asuna.svg" />
            <Svg image="https://vulk.cssninja.io/assets/brands/vonmo.svg" />
            <Svg image="https://vulk.cssninja.io/assets/brands/covenant.svg" />
            <Svg image="https://vulk.cssninja.io/assets/brands/grubspot.svg" />
            <Svg image="https://vulk.cssninja.io/assets/brands/infinite.svg" />
          </div>
        </div>
      </section>
      <section>
        <div className="card-section">
          <Cards_8
            card_title="Campaigns"
            card_image={<Cardsvg1 />}
            card_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere."
          />
          <Cards_8
            card_title="Task Management"
            card_image={<Cardsvg2 />}
            card_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere."
          />
          <Cards_8
            card_title="Personal Dashboard"
            card_image={<Cardsvg3 />}
            card_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere."
          />
          <Cards_8
            card_title="Payment Gateways"
            card_image={<Cardsvg4 />}
            card_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere."
          />
          <Cards_8
            card_title="Time Management"
            card_image={<Cardsvg5 />}
            card_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere."
          />
          <Cards_8
            card_title="Notifications"
            card_image={<Cardsvg6 />}
            card_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere."
          />
          <Cards_8
            card_title="Social Integrations"
            card_image={<Cardsvg7 />}
            card_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere."
          />
          <Cards_8
            card_title="Instant Messaging"
            card_image={<Cardsvg8 />}
            card_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere."
          />
        </div>
      </section>
      <section>
        <div>
          <Left_text
            title="Managed Services"
            heading="Market based DSP managed service"
            description="Whether you're looking to maximize reach, grow incremental profits, or optimize towards custom metrics, our team of experts is here to ensure success is targeted to your KPIs."
            image1={
              "https://vulk.cssninja.io/assets/illustrations/features/feature-1.png"
            }
          />
        </div>
      </section>
      <section>
        <div>
          <Right_text
            image1={
              "https://vulk.cssninja.io/assets/illustrations/features/feature-2.png"
            }
            title="Goal-based Campaign Creation"
            heading="Build campaigns aligned to your goals in minutes"
            description=" Start with your business goals at a product level and let us automatically create ad groups and campaigns targeted to the right audiences. Do all of this at scale in just a few minutes with four simple steps."
          />
        </div>
      </section>
      <section>
        <div>
          <Left_text
            title="Automated Keyword Actions"
            heading="We find the best keywords based on your parameters"
            description="Automate and customize your keyword selection by setting thresholds on conversions, cost per conversion, and click rates, and free up valuable time you can use for other important business tasks."
            image1={
              "https://vulk.cssninja.io/assets/illustrations/features/feature-3.png"
            }
          />
        </div>
      </section>
      <section>
        <div>
          <Right_text
            image1={
              "https://vulk.cssninja.io/assets/illustrations/features/feature-4.png"
            }
            title="Custom Analytics"
            heading="Understand your business metrics, your way"
            description="Drill and slice into your advertising performance data by different metrics, brand names, campaigns, targeting types, and mor"
          />
        </div>
      </section>
      <section>
        <div className="long_card_section">
          <Card_1
            title="Success Stories"
            heading="Learn how they built a successful business"
            description="See how some of our customers leverage Vulk technology to increase profits and take back control from resellers"
            link="Read success stories"
            image="https://vulk.cssninja.io/assets/illustrations/features/feature-3.png"
          />
        </div>
      </section>
      <section>
        <div className="company-logo1">
          <div className="heading2">
            WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500
          </div>
          <div className="company-logo-card">
            <Svg image="https://vulk.cssninja.io/assets/brands/asuna.svg" />
            <Svg image="https://vulk.cssninja.io/assets/brands/vonmo.svg" />
            <Svg image="https://vulk.cssninja.io/assets/brands/covenant.svg" />
            <Svg image="https://vulk.cssninja.io/assets/brands/grubspot.svg" />
            <Svg image="https://vulk.cssninja.io/assets/brands/infinite.svg" />
            <Svg image="https://vulk.cssninja.io/assets/brands/kromo.svg" />
            <Svg image="https://vulk.cssninja.io/assets/brands/phasekit.svg" />
            <Svg image="https://vulk.cssninja.io/assets/brands/hewitt.svg" />
          </div>
        </div>
      </section>
      <section className="solution_card">
        <div className="card_2">
          <div className="heading3">
            Why you should try our Optimization solution
          </div>
          <div className="heading4">Three reasons you’ll love our solution</div>
          <div className="our_solution_card">
            <Card_3
              image="https://vulk.cssninja.io/assets/icons/colored/chat.svg"
              title="Reach more customers"
              description="Be where your customers are. Target buyers by search behavior, discover new converting keywords, and automatically set bids based on your product goals."
            />
            <Card_3
              image="https://vulk.cssninja.io/assets/icons/colored/clock.svg"
              title="Save hours of time a week"
              description="Optimize your advertising workflow with automated campaign creation, keyword refinement, and algorithmic bidding. You set the controls, and our AI-technology does the heavy lifting."
            />
            <Card_3
              image="https://vulk.cssninja.io/assets/icons/colored/certificate.svg"
              title="Get profitability insights"
              description="Connect your PPC spend to individual product costs and see a granular view of your product-level profitability. Confidently make smart decisions with essential metrics and reporting."
            />
          </div>
        </div>
      </section>

      <section>
        <div className="footer">
          <div className="footer-cta">
            <Card_2
              head="30-day free trial"
              heading="Maximize your marketplace potential"
              buttonname="Get Started"
              button2="Let's talk"
            />
          </div>
          <div className="iteams">
            <div className="iteams1">
              <ul className="ul">
                <li className="list_1">PRODUCT</li>
                <li className="list">Core features</li>
                <li className="list">Extensions</li>
                <li className="list">Marketing</li>
                <li className="list">Sales Management</li>
                <li className="list">Software</li>
              </ul>
            </div>
            <div className="iteams2">
              <ul className="ul">
                <li className="list_1">COMPANY</li>
                <li className="list">Register</li>
                <li className="list">14-Day Trial</li>
                <li className="list">About Us</li>
                <li className="list">Careers</li>
                <li className="list">Latest News</li>
              </ul>
            </div>
            <div className="iteams3">
              <ul className="ul">
                <li className="list_1">API</li>
                <li className="list">Getting Started</li>
                <li className="list">API Reference</li>
                <li className="list">Developer Guide</li>
                <li className="list">GitHub</li>
              </ul>
            </div>
            <div className="iteams4">
              <ul className="ul">
                <li className="list_1">ASSISTANCE</li>
                <li className="list">Help Center</li>
                <li className="list">Support Requests</li>
                <li className="list">FAQs</li>
                <li className="list">Licensing</li>
              </ul>
            </div>
            <div className="iteams5">
              <ul className="ul">
                <li>
                  <Button startIcon={<Email_Icon />} className="subscribe_btn">
                    Subscribe
                  </Button>
                </li>
                <li>
                  <Button variant="contained" className="subscribe_btn">
                    Subscribe
                  </Button>
                </li>

                <li className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer_end">
            <div className="contact">
              <div>Contact Us</div>
              <div>Privacy</div>
              <div>Terms of Service</div>
            </div>
            <div className="2022">
              © 2022-2023 Css Ninja. All rights reserved
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
