import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return "Home Page Content";
      case "About":
        return "About Page Content";
      case "Features":
        return "Features Page Content";
      default:
        return "Pages Go Here";
    }
  };

  return (
    <div className="tabs">
      {/* Tabs */}
      <div>
        <button
          className="tab"
          id="Home-tab"
          onClick={() => setActiveTab("Home")}
        >
          Home
        </button>
        <button
          className="tab"
          id="About-tab"
          onClick={() => setActiveTab("About")}
        >
          About
        </button>
        <button
          className="tab"
          id="Features-tab"
          onClick={() => setActiveTab("Features")}
        >
          Features
        </button>
      </div>

      {/* Viewport */}
      <div className="viewport">{renderContent()}</div>
    </div>
  );
};

export default App;
