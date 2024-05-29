import logo from "./logo.svg";
import "./App.css";

function App() {
  function fetchCSV(url) {
    return fetch(url)
      .then((response) => response.text())
      .then((csvText) => {
        const rows = csvText.split("\n").map((row) => row.split(","));
        return rows;
      });
  }
  const csvURLs = [
    "http://localhost:3002/Chronic_trouble_sites_summary.csv",
    "http://localhost:3002/Gross_system_failures_summary.csv",
  ];
  csvURLs.map((url) => {
    fetchCSV(url)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching CSV:", error);
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
