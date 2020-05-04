import React, { Component } from "react";
import "./newinput.css";

class Newinput extends Component {
  state = {
    new: "****************",
    name: "",
    RIB: "",
    date: "",
  };

  /*Test name*/
  testName = (e) => {
    var newName = e.target.value;
    var regN = /[a-z]+/;

    if (regN.test(newName)) {
      this.setState({ name: newName.toUpperCase() });
    } else {
      this.setState({ name: "" });
    }
  };

  /*Test RIB*/
  testRib = (e) => {
    var newRib = e.target.value;
    var regR = /^[0-9]+$/g;
    let res;
    let tab = newRib.split("");

    for (let i = tab.length; i < 16; i++) {
      tab.push("*");
    }
    console.log(tab);

    if (regR.test(newRib)) {
      this.setState({ new: tab.join(""), RIB: e.target.value });
      if (newRib.length === 16) {
        res = newRib.match(/\d{4}/g).join(" ");
        console.log(res);
        this.setState({ new: res, RIB: res });
      }
    } else {
      res = "";
    }
  };

  /*Test Date*/
  testD = (e) => {
    let newD = e.target.value;
    let dateMonth = newD.substr(0, 2);
    let dateYear = newD.substr(2, 2);

    if (newD.length > 3) {
      let regM1 = /^0[1-9]$/;
      let regM2 = /^1[0-2]$/;
      let regY = /^2[0-5]$/;
      if (regM1.test(dateMonth) || regM2.test(dateMonth)) {
        if (regY.test(dateYear)) {
          newD = dateMonth + "/" + dateYear;
        } else {
          alert("You must type a year");
        }
      } else {
        alert("You must type a month");
      }
    }
    this.setState({ date: newD });
  };

  render() {
    return (
      <div className="newinput">
        <div className="inputs">
          <h1 className="title">Enter your card's informations</h1>

          <ul>
            <input
              type="text"
              id="NOM"
              placeholder="NOM"
              value={this.state.name} /*affichage du résultat dans html*/
              onChange={this.testName} /*event du chgt de la valeur de l'input*/
            />
            <input
              type="text"
              id="rib"
              placeholder="RIB"
              value={this.state.RIB} /*affichage du résultat dans html*/
              onChange={this.testRib} /*event du chgt de la valeur de l'input*/
            />
            <input
              type="text"
              id="date"
              placeholder="MM/YY"
              value={this.state.date}
              onChange={this.testD} /*affichage du résultat dans html*/
              /*event du chgt de la valeur de l'input*/
            />
          </ul>
        </div>
        <div className="card">
          <h3 className="numRib">{this.state.new}</h3>
          <h3 className="nom">{this.state.name}</h3>
          <h3 className="date">{this.state.date}</h3>
        </div>
      </div>
    );
  }
}
export default Newinput;
