import React from 'react';
import './HomeFilter.css';
const HomeFilter = () => (
  <div className="home-filter">
    <button className="home-filterBtn">All Events</button>
    <button className="home-filterBtn home-filterBtn_prev">Previous</button>
    <button className="home-filterBtn home-filterBtn_fut">Future</button>
  </div>
);

export default HomeFilter;
