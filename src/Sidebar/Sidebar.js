import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBook, faUsers, faShop, faBell, faUser, faMedal, faGear, faHeadset, faRightFromBracket, faCircleUp, faGift, faMagic, faComputer, faSquareCheck, faBrain, faArrowRight, faLock } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* Sidebar Content */}
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h2>Vinay</h2>
          <p>Student</p>
        </div>
        <button className="create-btn"><h2>+ Create</h2></button>

        <div className="sidebar-menu">
          <div className="slist1">
            <ul>
              <li><span className="menu-item"><FontAwesomeIcon icon={faBook} />My Library</span></li>
              <li><span className="menu-item"><FontAwesomeIcon icon={faSquareCheck} />Smart Review</span><FontAwesomeIcon icon={faLock} /></li>
              <li><span className="menu-item"><FontAwesomeIcon icon={faComputer} />Hosted Sessions</span><FontAwesomeIcon icon={faLock} /></li>
            </ul>
          </div>
          <div className="slist1 brain">
            <ul>
              <li className="highlight"><FontAwesomeIcon icon={faBrain} />Battle of the Brains</li>
            </ul>
          </div>
          <div className="slist1">
            <ul>
              <li><FontAwesomeIcon icon={faUsers} />Groups<FontAwesomeIcon icon={faLock} /></li>
              <li><FontAwesomeIcon icon={faShop} />Marketplace<FontAwesomeIcon icon={faLock} /></li>
            </ul>
          </div>
          <div className="slist1">
            <ul>
              <li><FontAwesomeIcon icon={faMedal} />Rewards</li>
              <li><FontAwesomeIcon icon={faBell} />Notifications<FontAwesomeIcon icon={faLock} /></li>
              <li><FontAwesomeIcon icon={faUser} />Profile</li>
              <li><FontAwesomeIcon icon={faGear} />Settings<FontAwesomeIcon icon={faLock} /></li>
              <li><FontAwesomeIcon icon={faYoutube} />How to Use</li>
              <li><FontAwesomeIcon icon={faHeadset} />Support Hub</li>
              <li><FontAwesomeIcon icon={faRightFromBracket} />Logout</li>
            </ul>
          </div>
        </div>

        {/* Other Links */}
        <div className="sidebar-footer">
          <div className="slist1">
            <span className="spann">Other Links</span>
            <h3><FontAwesomeIcon icon={faMagic} /> At Your Service</h3>
          </div>
          <button className="upgrade-btn"><FontAwesomeIcon icon={faCircleUp} />Upgrade</button>
          <button className="headown">
            <FontAwesomeIcon icon={faGift} />
            Refer a Friend & <br />
            Earn More Coins<FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
