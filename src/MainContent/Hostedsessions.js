import React from "react";
import "./Hostedsessions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Hostedsessions = () => {
  const cardsData = [
    {
      title: "Energy Transfer",
      difficulty: "Easy",
      questions: 5,
      time: "60s",
      genre: "Science",
      date: "07/08/2024 | 1:05 PM",
    },
    {
      title: "Physics Basics",
      difficulty: "Medium",
      questions: 10,
      time: "90s",
      genre: "Physics",
      date: "07/07/2024 | 2:30 PM",
    },
    {
      title: "Math Quiz",
      difficulty: "Hard",
      questions: 15,
      time: "120s",
      genre: "Math",
      date: "07/06/2024 | 11:15 AM",
    },
    {
      title: "Math Quiz",
      difficulty: "Hard",
      questions: 15,
      time: "120s",
      genre: "Math",
      date: "07/06/2024 | 11:15 AM",
    },
  ];

  return (
    <div className="hosted-sessions">
      {/* Search Section */}
      <div className="input-group">
        <button className="btn btn-primary genre-button">All Genres</button>
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search your hosted games by Titles or session names"
        />
        <span className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>

      {/* Cards Section */}
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div className="card1" key={index}>
            <div className="card-header">
              <h3>{card.title}</h3>
              <p className="session">Session Name : ************</p>
              <p>
                {card.difficulty} | {card.questions} Questions | {card.time}
              </p>
            </div>
            <div className="card2">
            <div className="card-body2">
              <h5>MCQ's</h5>
              <p>
                <strong>Genre:</strong> {card.genre}
              </p>
              <p>
                <strong>Hosted on:</strong> {card.date}
              </p>
            </div>
            <div className="card-actions">
              <button className="host-btn">Host Game</button>
              <button className="leaderboard-btn">Leaderboard</button>
            </div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hostedsessions;
