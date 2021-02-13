import React from "react";

const Table = ({ data }) => {
  return (
    <div className="p-3">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">State</th>
            <th scope="col">Confirmed</th>
            <th scope="col">Active</th>
            <th scope="col">Recovered</th>
            <th scope="col">Deceased</th>
          </tr>
        </thead>
        <tbody>
          {data.map((num) => {
            return (
              <tr key={num}>
                <td>{num.state}</td>
                <td>{num.confirmed}</td>
                <td>{num.active}</td>
                <td>{num.recovered}</td>
                <td>{num.deaths}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
