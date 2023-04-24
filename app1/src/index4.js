import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

var output = (
<>
  <meta charSet="UTF-8" />
  <title>Change Password</title>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  />
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h1>Change Password</h1>
        <form>
          <div className="form-group">
            <label htmlFor="current-password">Current Password</label>
            <input
              type="password"
              className="form-control"
              id="current-password"
              name="current-password"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">New Password</label>
            <input
              type="password"
              className="form-control"
              id="new-password"
              name="new-password"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm New Password</label>
            <input
              type="password"
              className="form-control"
              id="confirm-password"
              name="confirm-password"
              required=""
            />
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


