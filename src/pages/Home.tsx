import React, { Fragment } from 'react';
import LinkBtn from '../components/buttons/link/LinkBtn';
import EventList from '../components/events/eventList/EventList';

const Home = () => (
  <>
    <LinkBtn to="/add" text="Add Event" />
    <EventList />
  </>
);

export default Home;
