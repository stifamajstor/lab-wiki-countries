import React, { Component } from "react";
import data from "./countries.json";
import { Link, NavLink, Route, Switch } from "react-router-dom";

class CountryList extends Component {
  render() {
    const countries = data.map(country => {
      return (
        <NavLink
          activeClassName="my-active"
          key={country.cca3}
          className="list-group-item list-group-item-action"
          to={country.cca3}
        >
          {country.flag} {country.name.common}
        </NavLink>
      );
    });

    return (
      <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <div className="list-group">{countries}</div>
      </div>
    );
  }
}

export default CountryList;
