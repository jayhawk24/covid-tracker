import React, { Component } from "react";
import Table from "../components/table";
import { getData } from "./fetchdata";

class Dashboard extends Component {
  state = {
    data: "",
  };
  async componentDidMount() {
    const { data } = await getData();
    const dataStatewise = data.statewise;
    dataStatewise.splice(0, 1);
    dataStatewise.splice(35, 1);
    this.setState({ data: dataStatewise });
  }

  render() {
    if (!this.state.data) return null;
    return (
      <React.Fragment>
        <h1>India Covid-19 Tracker</h1>
        <p>Let's pray to make our Earth Covid-19 free soon.</p>
        <Table data={this.state.data}></Table>
      </React.Fragment>
    );
  }
}

export default Dashboard;
