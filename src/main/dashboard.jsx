import React, { Component } from "react";
import Table from "../components/table";
import { getData } from "./fetchdata";
import DonutChart from "../components/donutChart";
import LineChart from "../components/lineChart";

class Dashboard extends Component {
  state = {
    data: "",
    active: "",
    deceased: "",
    recovered: "",
  };
  async componentDidMount() {
    const { data } = await getData();
    const dataStatewise = data.statewise;
    const active = dataStatewise[0].active;
    const recovered = dataStatewise[0].recovered;
    const deceased = dataStatewise[0].deaths;
    const last7days = data.cases_time_series.slice(-7);
    dataStatewise.splice(0, 1);
    dataStatewise.splice(35, 1);

    this.setState({
      data: dataStatewise,
      active,
      recovered,
      deceased,
      last7days,
    });
  }

  render() {
    if (!this.state.data) return null;
    const { active, recovered, deceased, data, last7days } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row-sm">
                <div className="col-sm">
                  <DonutChart
                    active={active}
                    recovered={recovered}
                    deceased={deceased}
                  ></DonutChart>
                </div>
                <div className="col-sm">
                  <LineChart last7days={last7days}></LineChart>
                </div>
              </div>
              <div className="row">
                <Table data={data}></Table>
              </div>
            </div>
            <div className="col"></div>
          </div>

          <h1>India Covid-19 Tracker</h1>
          <p>Let's pray to make our Earth Covid-19 free soon.</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
