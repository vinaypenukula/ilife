import React from "react";
import "./Cardsection.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const cardsData = [
  {
    title: "Energy Transfer",
    difficulty: "Easy",
    questions: 20,
    time: "60s",
    createdBy: "Rahul",
    genre: "Tech",
    date: "07/08/2024 | 1:05 PM",
  },
  {
    title: "Physics Basics",
    difficulty: "Medium",
    questions: 25,
    time: "90s",
    createdBy: "Alice",
    genre: "Science",
    date: "07/07/2024 | 2:30 PM",
  },
  {
    title: "Mathematics Quiz",
    difficulty: "Hard",
    questions: 30,
    time: "120s",
    createdBy: "John",
    genre: "Math",
    date: "07/06/2024 | 11:15 AM",
  },
];

const Cardsection = () => {
  return (
    <div className="cards-section">
      {cardsData.map((card, index) => (
  <div className="card" key={index}>
    <div className="card-icon">
      <img src="path-to-image" alt={`${card.title} icon`} />
      <div className="edit-pencil">✏️</div>
    </div>
    <div className="card-content">
      <div className="card-header">
        <h3>{card.title}</h3>
        <p className="mcqs">{card.difficulty} | {card.questions} MCQs | {card.time}</p>
      </div>
      <div className="card-body">
        <span className="created1">
        <p className="created-by">
          <strong>Created by:</strong> {card.createdBy}
        </p>
        <p>
          <strong>Genre:</strong> {card.genre}
        </p></span>
        <p>
          <strong>Created on:</strong> {card.date}
        </p>
      </div>
      
    </div>
    <div className="card-actions">
      <button className="edit-btn"><FontAwesomeIcon icon={faTrash}/></button>
      <button className="play-btn"><FontAwesomeIcon icon={faPen} />  Edit</button>
      <button className="delete-btn"><FontAwesomeIcon icon={faPlay} />  Play</button>
    </div>
  </div>
))}

    </div>
  );
};

export default Cardsection;
