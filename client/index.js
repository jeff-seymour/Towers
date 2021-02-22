import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom';

import App from './components/App'

class Button extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0 };
  }

  handleClick() {
    const min = 1;
    const max = 13;
    const rand = Math.floor(min + Math.random() * (max - min));
 
    this.setState({ random: rand });
  }

  render() {
    return (
      
      <div className="row">
        <div className="col-12">
          <button className="btn btn-primary" 
          onClick={this.handleClick.bind(this)}>Roll</button>
          <div className="card" style={{marginTop:"10px"}}>
            <div className="card-block">
              Your roll: {this.state.random}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<Button />, document.getElementById('container'));

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
