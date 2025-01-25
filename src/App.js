import React, { useState } from "react"; // Import useState
import Navbar from "./Header/Navbar"; // Navigation bar component
import Sidebar from "./Sidebar/Sidebar"; // Sidebar component
import MainContent from "./MainContent/MainContent"; // Main content component
import './App.css'; // Global styles

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app-container">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="content-container">
        {/* Sidebar Section */}
        <Sidebar isOpen={isOpen} />
        {/* Main Content Section */}
        <MainContent />
      </div>
    </div>
  );
}

export default App;
