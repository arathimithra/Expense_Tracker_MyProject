import React from "react";
import "./Home.css";
import Header from "./Header/Header";
function Home() {
  return (
    <div className="home">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>ONE OF THE BEST EXPENSE TRACKING APPLICATION</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">EMPOWERING </span>
            <span>YOUR</span>
          </div>
          <div>
            <span>FINANCIAL  JOURNEY</span>
          </div>
          <div>
            <span>
               We will help you to track your daily expenses effectively...
            </span>
          </div>
        </div>
<div className="figures">
  <div> 
    <span>+1cr</span>
    <span>Users</span>
  </div>
  <div> 
    <span>+20</span>
    <span>Features</span>
  </div>
  {/* <div> 
    <span>Happy</span>
    <span>Customers</span>
  </div> */}
</div>
<div className="hero-buttons">
  <buttons className="btn">Get Started</buttons>
  <buttons className="btn">Learn More</buttons>
</div>
 </div>

      <div className="right-h">
        <button className="btn">Join Now</button>
        {/* <img src=""/>
        <span>ygy</span><span>hhch</span> */}
        <img  className="arrow" src="image/arrow.png" />
        <img  className="back" src="image/r.png" />
      </div>

    </div>
  );
}

export default Home;
