import React, { Component } from "react";

/* Import Components */
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Button from "../components/Button";

class runForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newRun: {
        name: "",
        date: "",
        distance: "",
        comment: ""
      },

      distanceOptions: ["5k", "10k", "15k"],
      difficultyOptions: ["Easy", "Medium", "Hard"]
    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newRun: {
          ...prevState.newRun,
          name: value
        }
      }),
      () => console.log(this.state.newRun)
    );
  }

  handleDate(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newRun: {
          ...prevState.newRun,
          date: value
        }
      }),
      () => console.log(this.state.new)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newRun: {
          ...prevState.newRun,
          [name]: value
        }
      }),
      () => console.log(this.state.newRun)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newRun: {
          ...prevState.newRun,
          about: value
        }
      }),
      () => console.log(this.state.newRun)
    );
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newRun.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newRun.skills.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newRun.skills, newSelection];
    }

    this.setState(prevState => ({
      newRun: { ...prevState.newRun, skills: newSelectionArray }
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newRun;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newRun: {
        name: "",
        date: "",
        distance: "",
        comment: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Full Name"}
          name={"name"}
          value={this.state.newRun.name}
          placeholder={"Enter your name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <Input
          inputType={"number"}
          name={"Date"}
          title={"Date"}
          value={this.state.newRun.date}
          placeholder={"Enter the date"}
          handleChange={this.handleDate}
        />{" "}
        {/* Age */}
        <Select
          title={"Distance"}
          name={"distance"}
          options={this.state.DistanceOptions}
          value={this.state.newRun.distance}
          placeholder={"Select distance"}
          handleChange={this.handleInput}
        />{" "}
        {/* Age Selection */}
        <CheckBox
          title={"Difficulty"}
          name={"difficulty"}
          options={this.state.difficultyOptions}
          selectedOptions={this.state.newRun.difficulty}
          handleChange={this.handleCheckBox}
        />{" "}
        {/* Skill */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;

