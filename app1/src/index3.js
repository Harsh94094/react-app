import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

var output = (
<>
  <meta charSet="UTF-8" />
  <title>Registration Form</title>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  />
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h1>Register</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirm-password"
              name="confirm-password"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              name="mobile"
              pattern="[0-9]{10}"
              required=""
            />
            <small className="form-text text-muted">
              Please enter a 10-digit phone number.
            </small>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</>

) 
root.render(output);  


