import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

var output = (
<>
  <meta charSet="UTF-8" />
  <title>Resume</title>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  />
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card mt-5">
          <div className="card-header bg-primary text-white">
            <h1 className="text-center mb-0">Harsh gadhiya</h1>
            <h3 className="text-center mt-0">Web Developer</h3>
          </div>
          <div className="card-body">
            <h4 className="mb-3">Summary</h4>
            <p>
              I am a web developer with experience in HTML, CSS, JavaScript, and
              Bootstrap. I am passionate about creating responsive and
              user-friendly websites.
            </p>
            <h4 className="mb-3">Experience</h4>
            <div className="card mb-3">
              <div className="card-header bg-light">
                <h5 className="mb-0">Web Developer - XYZ Company</h5>
                <p className="text-muted mb-0">January 2024 - Present</p>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    Developed responsive websites using HTML, CSS, and
                    JavaScript
                  </li>
                  <li>
                    Collaborated with team members to design and implement new
                    features
                  </li>
                  <li>
                    Optimized website performance using techniques such as lazy
                    loading and minification
                  </li>
                </ul>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-header bg-light">
                <h5 className="mb-0">Web Developer - ABC Company</h5>
                <p className="text-muted mb-0">June 2023 - December 2024</p>
              </div>
              <div className="card-body">
                <ul>
                  <li>Created and maintained websites using WordPress</li>
                  <li>Designed and implemented custom themes and plugins</li>
                  <li>
                    Collaborated with clients to ensure their needs were met
                  </li>
                </ul>
              </div>
            </div>
            <h4 className="mb-3">Education</h4>
            <div className="card mb-3">
              <div className="card-header bg-light">
                <h5 className="mb-0">
                  Bachelor of Science in Computer Science - University of gmit
                </h5>
                <p className="text-muted mb-0">Graduated May 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

) 
root.render(output);  


