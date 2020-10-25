import React, { Fragment, useState } from "react";
import "./Search.scss";
const Search = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const onChange = (e) => setText(e.target.value);

  const onClick = async (text) => {
    try {
      const BASE_URL = `https://api.ip2country.info`;
      const res = await fetch(`${BASE_URL}/ip?${text}`);
      const data = await res.json();
      const result = (
        <div className="result-container">
          <p>
            {data.countryEmoji} {data.countryName}
          </p>
          <p>{data.countryCode}</p>
        </div>
      );
      setResult(result);
    } catch (error) {
      console.log(error);
      showError(<h2>Problem with API</h2>);
    }
  };

  const fetchData = () => {
    if (text === "") {
      showError(<h2>Enter a correct value</h2>);
    } else if (text.trim()) {
      onClick(text);
    } else {
      showError(<h2>Problem with API</h2>);
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
      <div className="result-container">
        {result}
        {error}
      </div>
    </Fragment>
  );
};
export default Search;
