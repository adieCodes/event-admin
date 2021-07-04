import React from 'react';
import HomeFilter from '../../filters/homeFilter/HomeFilter';
import LinkBtn from '../../buttons/link/LinkBtn';
import './HomeToolbar.css';

const HomeToolbar = () => (
  <div className="homeToolbar">
    <HomeFilter />
    <LinkBtn to="/add" text="Add Event" />
  </div>
);

export default HomeToolbar;
