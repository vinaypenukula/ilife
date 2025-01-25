import React from "react";
import "./Leaderboard.css"; // Import CSS for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faCoins, faCrown } from "@fortawesome/free-solid-svg-icons";
import boy from "../../src/assets/boy.png"

const Leaderboard = () => {
  return (
    <div className="leaderboard-container">
      <div className="leaderLogo">
        <FontAwesomeIcon icon={faCrown } className="crown" />
      <button className="leaderTitle"><h1 className="leaderboard-title">Leaderboard</h1></button></div>
      <div className="top-cards">
        <div className="card3 silver">
          <FontAwesomeIcon icon={faMedal} className="medal-icon silver" />
          <p className="rank">#2</p>
          <img src={boy} alt="Profile" className="round-image"/>
          <p className="name">Jane Doe</p>
          <p className="email">pr******@gmail.com</p>
          <p className="theme">Marvel</p>
          <p className="coins">
            <FontAwesomeIcon icon={faCoins} /> 2530
          </p>
        </div>
        <div className="card3 gold">
          <FontAwesomeIcon icon={faMedal} className="medal-icon gold" />
          <p className="rank">#1</p>
          <img src={boy} alt="Profile" className="round-image"/>
          <p className="name">Jane Doe</p>
          <p className="email">pr******@***</p>
          <p className="theme">Games</p>
          <p className="coins">
            <FontAwesomeIcon icon={faCoins} /> 3454
          </p>
        </div>
        <div className="card3 bronze">
          <FontAwesomeIcon icon={faMedal} className="medal-icon bronze" />
          <p className="rank">#3</p>
          <img src={boy} alt="Profile" className="round-image"/>
          <p className="name">Jane Doe</p>
          <p className="email">pr******@***</p>
          <p className="theme">Anime</p>
          <p className="coins">
            <FontAwesomeIcon icon={faCoins} /> 2950
          </p>
        </div>
      </div>

      <div className="rank-table">
  <div className="table-header">
    <p>Rank</p>
    <p>Name</p>
    <p>Theme</p>
    <p>Coins</p>
  </div>

  <div className="table-row">
    <p>#4</p>
    <img src={boy} alt="Profile" />
    <div className="namejan">
      <div>
        <p className="name-text">Jane Doe</p>
        <p className="email">pr******@***</p>
      </div>
      <p className="theme1">Marvel</p>
    </div>
    <p className="coins">
      <FontAwesomeIcon icon={faCoins} /> 2245
    </p>
  </div>

  <div className="table-row">
    <p>#5</p>
    <img src={boy} alt="Profile" />
    <div className="namejan">
      <div>
        <p className="name-text">Jane Doe</p>
        <p className="email">pr******@***</p>
      </div>
      <p className="theme1">Harry Potter</p>
    </div>
    <p className="coins">
      <FontAwesomeIcon icon={faCoins} /> 2105
    </p>
  </div>

  <div className="table-row">
    <p>#6</p>
    <img src={boy} alt="Profile" />
    <div className="namejan">
      <div>
        <p className="name-text">Jane Doe</p>
        <p className="email">pr******@***</p>
      </div>
      <p className="theme1">Oscar Movie</p>
    </div>
    <p className="coins">
      <FontAwesomeIcon icon={faCoins} /> 1920
    </p>
  </div>

  <div className="table-row">
    <p>#7</p>
    <img src={boy} alt="Profile" />
    <div className="namejan">
      <div>
        <p className="name-text">Jane Doe</p>
        <p className="email">pr******@***</p>
      </div>
      <p className="theme1">Marvel</p>
    </div>
    <p className="coins">
      <FontAwesomeIcon icon={faCoins} /> 1815
    </p>
  </div>
</div>


    </div>
  );
};

export default Leaderboard;
