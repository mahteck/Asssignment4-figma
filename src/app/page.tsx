import { Session } from "inspector/promises";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    
    <div className="hero">
        <div className="container">
          <div className="hero-content">
          <h1>Hi, I am John, Creative Technologist</h1>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <a href="#" className="btn">Download Resume</a>
          </div>
          <div className="hero-image">
            <img src="/images/profile.png" alt="John's Picture"/>
          </div>
        </div>
    </div>

    <div className="recent-posts">
    <div className="posts-header">
        <h2 className="recent-post">Recent Post</h2>
        <a href="#" className="view-all">View all</a>
    </div>

      <div className="post-boxes">
          <div className="post-box">
          <h3>Making a design system from scratch</h3>
          <br/>
          <p>12 Feb 2020  |   Design, Pattern</p>
          <br/>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>

          <div className="post-box">
          <h3>Making a design system from scratch</h3>
          <br/>
          <p>12 Feb 2020 | Design, Pattern</p>
          <br/>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
      </div>
    </div>

    <section className="featured-work">
      <h2 className="heading">Featured Work</h2>
      <br/>
          <div className="container">
              <div className="work-grid">
                  <div className="work-item">
                      <div className="work-content">
                          <img src="/images/image1.png" alt="Work 1" />
                          <div className="work-details">
                              <h1>Designing Dashboards</h1>
                              <p><span className="work-year">2020</span> <span className="dashboard-text">Dashboard</span></p>
                              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet</p>
                          </div>
                      </div>
                  </div>
                  <div className="work-item">
                      <div className="work-content">
                          <img src="/images/image2.png" alt="Work 2" />
                          <div className="work-details">
                              <h1>Designing Dashboards</h1>
                              <p><span className="work-year">2020</span> <span className="dashboard-text">Dashboard</span></p>
                              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                          </div>
                      </div>
                  </div>
                  <div className="work-item">
                      <div className="work-content">
                          <img src="/images/image3.png" alt="Work 3" />
                          <div className="work-details">
                              <h1>Designing Dashboards</h1>
                              <p><span className="work-year">2020</span> <span className="dashboard-text">Dashboard</span></p>
                              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <footer>
        <div className="footercontainer">
            <p>Copyright ©2020 All rights reserved</p>
            <div className="social-links">
                <a href="#"><img src="/images/facebook.png" alt="Facebook"/></a>
                <a href="#"><img src="/images/instagram.png" alt="Instagram"/></a>
                <a href="#"><img src="/images/twitter.png" alt="Twitter"/></a>
                <a href="#"><img src="/images/linkedin.png" alt="LinkedIn"/></a>
            </div>
        </div>
      </footer>
    </>
    
  );
}
