import React, { useState } from "react";
import Cardsection from "./Cardsection";
import Sidesection from "./Sidesection";
import Hostedsessions from "./Hostedsessions";
import Leaderboard from "./Leaderboard";
import "./MainContent.css";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState("My Library"); // For left section
  const [activeRightTab, setActiveRightTab] = useState("MCQ's"); // For right section

  const renderLeftContent = () => {
    if (activeTab === "My Library") {
      return <Cardsection />;
    } else if (activeTab === "Hosted Sessions") {
      return <Hostedsessions />;
    }
  };

  const renderRightContent = () => {
    if (activeRightTab === "MCQ's") {
      return <Sidesection />;
    } else if (activeRightTab === "Leaderboard") {
      return <Leaderboard />;
    }
  };

  return (
    <div className="main-content">
      <div className="left-section">
        {/* Tabs for "My Library" and "Hosted Sessions" */}
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === "My Library" ? "active" : ""}`}
            onClick={() => setActiveTab("My Library")}
          >
            My Library
          </button>
          <button
            className={`tab-btn ${activeTab === "Hosted Sessions" ? "active" : ""}`}
            onClick={() => setActiveTab("Hosted Sessions")}
          >
            Hosted Sessions
          </button>
        </div>
        {/* Render left content dynamically */}
        {renderLeftContent()}
      </div>

      <div className="divider"></div>

      <div className="right-section">
        {/* Tabs for "MCQ's" and "Leaderboard" */}
        <div className="tabs1">
          <button
            className={`tab-btn1 ${activeRightTab === "MCQ's" ? "active1" : ""}`}
            onClick={() => setActiveRightTab("MCQ's")}
          >
            MCQ's
          </button>
          <button
            className={`tab-btn1 ${activeRightTab === "Leaderboard" ? "active1" : ""}`}
            onClick={() => setActiveRightTab("Leaderboard")}
          >
            Leaderboard
          </button>
        </div>
        {/* Render right content dynamically */}
        {renderRightContent()}
      </div>
    </div>
  );
};

export default MainContent;
