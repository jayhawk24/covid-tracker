import React from "react";
const India = () => {
  return (
    <div className="col-sm-12" style={{ marginTop: 60, marginBottom: 80 }}>
      <IndiaMap
        onStateClick={(state) => {
          this.setState({
            showState: true,
            stateName: this.filterStateName(state.state),
            originalStateName: state.state,
            toolTipContent: state,
          });
        }}
        data={
          this.state.india.length !== 0
            ? this.state.india.statewise.filter(
                (state) => state.state !== "Total"
              )
            : []
        }
      />
    </div>
  );
};

export default India;
