import React, { Fragment } from 'react';
import AddEvent from '../components/buttons/addEvent/AddEvent';
import EventList from '../components/events/eventList/EventList';

const Home = () => (
  <>
    <AddEvent />
    <EventList />
  </>
);

export default Home;
