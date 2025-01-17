import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("");

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
            onClick={() => setActiveTab("Home")}
        >
          <div id="Home-Tab">Home</div>
        </button>
        <button
            className="tab"
            onClick={() => setActiveTab("About")}
        >
          <div id="About-Tab">About</div>
        </button>
        <button
            className="tab"
            onClick={() => setActiveTab("Features")}
        >
          <div id="Features-Tab">Features</div>
        </button>
      </div>

      {/* Viewport */}
      <div className="viewport">{renderContent()}</div>
    </div>
  );
};

export default App;
