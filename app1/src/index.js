import React , { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class BMICalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      weight: '',
      bmi: '',
      message: '',
    };
  }

  calculateBMI = () => {
    const height = parseFloat(this.state.height);
    const weight = parseFloat(this.state.weight);
    if (height && weight) {
      const bmi = weight / ((height / 100) ** 2);
      const message =
        bmi < 18.5
          ? 'Underweight'
          : bmi >= 18.5 && bmi < 25
          ? 'Normal'
          : bmi >= 25 && bmi < 30
          ? 'Overweight'
          : 'Obese';
      this.setState({ bmi: bmi.toFixed(2), message });
    }
  };

  handleHeightChange = (event) => {
    this.setState({ height: event.target.value });
  };

  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.calculateBMI();
  };

  render() {
    return (
      <div>
        <h2>BMI Calculator</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Height (cm): </label>
            <input
              type="number"
              value={this.state.height}
              onChange={this.handleHeightChange}
              required
            />
          </div>
          <div>
            <label>Weight (kg): </label>
            <input
              type="number"
              value={this.state.weight}
              onChange={this.handleWeightChange}
              required
            />
          </div>
          <button type="submit">Calculate BMI</button>
        </form>
        {this.state.bmi && (
          <div>
            <p>Your BMI is {this.state.bmi}</p>
            <p>You are {this.state.message}</p>
          </div>
        )}
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BMICalculator/>)
export default BMICalculator;
