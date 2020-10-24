import React, { Fragment, useState } from "react";
import "./Search.scss";

const Search = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const onChange = (e) => setText(e.target.value);

  const onClick = async (text) => {
    try {
      const BASE_URL = `https://www.ipvigilante.com/`;
      const res = await fetch(`${BASE_URL}${text}`);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = () => {
    if (text === "") {
      showError(<h2>Enter a value</h2>);
    } else {
      onClick(text);
    }
  };

  const showError = (msg) => setError(msg);

  return (
    <Fragment>
      <div className="search-container">
        <div className="para-container">
          <p>
            Get your IP address from{" "}
            <a
              href="https://whatismyipaddress.com/"
              target="_blank"
              rel="noreferrer"
            >
              Here
            </a>{" "}
            and enter it into the input below to find out the location of your
            IP address
          </p>
        </div>

        <input
          type="text"
          className="ip-input"
          placeholder="IP address"
          onChange={onChange}
        />
        <input
          type="submit"
          className="ip-btn"
          placeholder="Submit"
          onClick={fetchData}
        />
      </div>
    </Fragment>
  );
};
export default Search;
