import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    const [search] = e.target;
    history.push(search.value ? `/?search=${search.value}` : "/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to="/">
        Blog
      </Link>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
          <input
            name="search"
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
