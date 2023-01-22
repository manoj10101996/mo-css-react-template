import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://www.beforepost.com/css/introduction"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "logo192.png"}
            className="App-logo"
            alt="logo"
          />
          <div className="mo-text-b mb-5">MO CSS</div>
          <div className="p-0 mb-3 mo-text-i mo-text-3">
            The new generation front-end framework for web applications.
          </div>
          <div className="mo-text-2">Learn More About Beforepost Mo CSS</div>
        </a>
        <div className="mo-alert mo-border mo-border-danger mo-text-2 mo-alert-bg-danger mt-4">
          https://cdn.beforepost.com/neptune/beforepost-0.2.min.css
        </div>
      </header>
    </div>
  );
}

export default App;
