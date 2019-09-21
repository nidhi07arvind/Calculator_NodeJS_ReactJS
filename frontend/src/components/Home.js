import React, { Component } from "react";
import "../App.css";
import { runInThisContext } from "vm";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "",
      msg: ""
    };

    this.resultChangeHandler = this.resultChangeHandler.bind(this);
    //this.equationChangeHandler = this.equationChangeHandler.bind(this);
  }

  /*equationChangeHandler = e => {
    this.setState({
      equation: e.target.value
    });
  };*/

  resultChangeHandler = e => {
    this.setState({
      result: this.state.result + e.target.value
    });
  };

  clear = () => {
    console.log("inside clear");
    console.log(this.state);
    this.setState({
      result: "",
      msg: "cleared"
    });
  };

  calculate = () => {
    console.log(this.state);
    const data = {
      result: this.state.result,
      msg: "calculating..."
    };

    axios.post("http://127.0.0.1:3001/calculate", data).then(response => {
      console.log(response.status + "Waiting for results.. ");
      if (response.status === 200) {
        console.log(response.data);
        this.setState({
          result: response.data.result
        });
        //document.getElementById("text").value = this.state.result;
      }
    });
  };

  render() {
    console.log("Inside Calculator method");
    return (
      <div>
        <div class="container" align="center">
          <div class="login-form">
            <div class="panel">
              <h2>Calculator</h2>
            </div>
            <br></br>
            <div class="calculator-form">{this.state.result}</div>
            <div class="row">
              <button
                value="("
                onClick={this.resultChangeHandler}
                class="btn btn-primary"
              >
                (
              </button>
              <button
                value="CE"
                onClick={this.resultChangeHandler}
                class="btn btn-primary"
              >
                CE
              </button>
              <button
                value=")"
                onClick={this.resultChangeHandler}
                class="btn btn-primary"
              >
                )
              </button>
              <button value="C" onClick={this.clear} class="btn btn-primary">
                C
              </button>
            </div>
            <div class="row">
              <button
                value="1"
                onClick={this.resultChangeHandler}
                class="btn btn-primary"
              >
                1
              </button>
              <button
                value="2"
                onClick={this.resultChangeHandler}
                class="btn btn-primary"
              >
                2
              </button>
              <button
                value="3"
                onClick={this.resultChangeHandler}
                class="btn btn-primary"
              >
                3
              </button>
              <button
                value="+"
                onClick={this.resultChangeHandler}
                class="btn btn-primary"
              >
                +
              </button>
              <div class="row">
                <button
                  value="4"
                  onClick={this.resultChangeHandler}
                  class="btn btn-primary"
                >
                  4
                </button>
                <button
                  value="5"
                  onClick={this.resultChangeHandler}
                  class="btn btn-primary"
                >
                  5
                </button>
                <button
                  value="6"
                  onClick={this.resultChangeHandler}
                  class="btn btn-primary"
                >
                  6
                </button>
                <button
                  value="-"
                  onClick={this.resultChangeHandler}
                  class="btn btn-primary"
                >
                  -
                </button>
              </div>
              <div class="row">
                <button
                  value="7"
                  onClick={this.resultChangeHandler}
                  class="btn btn-primary"
                >
                  7
                </button>
                <button
                  value="8"
                  onClick={this.resultChangeHandler}
                  class="btn btn-primary"
                >
                  8
                </button>
                <button
                  value="9"
                  onClick={this.resultChangeHandler}
                  class="btn btn-primary"
                >
                  9
                </button>
                <button
                  value="*"
                  onClick={this.resultChangeHandler}
                  class="btn btn-primary"
                >
                  *
                </button>
              </div>
              <div class="row">
                <button
                  value="."
                  onClick={this.resultChangeHandler}
                  class="btn btn-primary"
                >
                  .
                </button>
                <button
                  value="0"
                  onClick={this.resultChangeHandler}
                  class="btn btn-primary"
                >
                  0
                </button>
                <button
                  value="="
                  onClick={this.calculate}
                  class="btn btn-primary"
                >
                  =
                </button>
                <button
                  value="/"
                  onClick={this.resultChangeHandler}
                  class="btn btn-primary"
                >
                  /
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
