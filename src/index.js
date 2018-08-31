import React, {Component} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      reverseString: "",
      textArray: [],
    }
    
    this.reverseInput = this.reverseInput.bind(this);
    this.addText = this.addText.bind(this);
    this.addText = this.addText.bind(this);
  }
  reverseInput(event) {
    this.setState({
      input:event.target.value,
      reverseString: event.target.value.split("").reverse().join("")
    });
  }

  addText() {
    const { textArray, input } = this.state;

    textArray.push({
      input,
      date: (new Date()).toLocaleTimeString() + " " + (new Date()).toLocaleDateString(),
      isVisible: true,
    });

    this.setState({textArray})
  }

  toggleVisibility(textIndex) {
    const { textArray } = this.state;
    console.log(textArray)
    let UpdatedTextArray = textArray.map((text, index) => {
      if(index === textIndex) {
        text.isVisible = text.isVisible ? false: true
      }
      return text
    })

    this.setState({textArray: UpdatedTextArray})
  }

  render() {
    const { textArray, input, reverseString } = this.state;
    return (
      <div className="App">
        <input value={input} onChange={this.reverseInput}/>
        <p>Normal String: {input}</p>
        <p>Reverse String: {reverseString}</p>

        <button onClick={this.addText}>Add Text</button>
        <ul>
          {textArray.map((text, index) => {
            return <li key={index}>
              <span className={text.isVisible? "visible": "invisible"}>{text.input} Created at: {text.date} </span>
                <button onClick={() => this.toggleVisibility(index)}>{text.isVisible? "Hide": "Show"}</button>
              </li>
          })}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
