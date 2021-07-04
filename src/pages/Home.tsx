import React, { Fragment } from 'react';
import HomeToolbar from '../components/toolbars/homeToolbar/HomeToolbar';
import EventList from '../components/events/eventList/EventList';

const Home = () => (
  <>
    <HomeToolbar />
    <EventList />
  </>
);

export default Home;
