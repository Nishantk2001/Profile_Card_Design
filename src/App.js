import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="imgBox">
          <img src="NIK.jpeg" alt="Nishant" />
        </div>
        <div className="content">
          <div className="details">
            <h2>
              Nishant Kumar
              <br />
              <span>FrontEnd Developer</span>
            </h2>

            <div className="data">
              <h3>
                100
                <br />
                <span>Project</span>
              </h3>
              <h3>
                30K
                <br />
                <span>Follower</span>
              </h3>
              <h3>
                100
                <br />
                <span>Clients</span>
              </h3>
            </div>
            <div className="actionBtn">
              <a href="mailto:nishant.k28101@gmail.com">
                <button>
                  Email <i class="fa-solid fa-envelope"></i>
                </button>
              </a>
              <a href="www.linkedin.com/in/nishant-kumar-3104a2259">
                <button>
                  Linkdin <i class="fa-brands fa-linkedin"></i>
                </button>
              </a>
            </div>
            <div className="AboutMe">
              <h3>About Me</h3>
              <p>
                Dedicated and detail-oriented Frontend Developer with One years
                of experience creating and implementing innovative web designs
                and user experiences. Proficient in translating UI/UX design
                wireframes into responsive and interactive web applications.
              </p>
            </div>
            <div className="social-media">
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-github"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
