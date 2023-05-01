import React, { Component }  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class AreaCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: '',
      width: '',
      area: '',
    };
  }

  calculateArea = () => {
    const length = parseFloat(this.state.length);
    const width = parseFloat(this.state.width);
    if (length && width) {
      const area = length * width;
      this.setState({ area });
    }
  };

  handleLengthChange = (event) => {
    this.setState({ length: event.target.value });
  };

  handleWidthChange = (event) => {
    this.setState({ width: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.calculateArea();
  };

  render() {
    return (
      <div>
        <h2>Area Calculator</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Length (m): </label>
            <input
              type="number"
              value={this.state.length}
              onChange={this.handleLengthChange}
              required
            />
          </div>
          <div>
            <label>Width (m): </label>
            <input
              type="number"
              value={this.state.width}
              onChange={this.handleWidthChange}
              required
            />
          </div>
          <button type="submit">Calculate Area</button>
        </form>
        {this.state.area && (
          <div>
            <p>The area is {this.state.area} square meters</p>
          </div>
        )}
      </div>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< AreaCalculator/>)
export default  AreaCalculator;
