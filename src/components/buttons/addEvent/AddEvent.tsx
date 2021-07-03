import React from 'react';
import { Link } from 'react-router-dom';
import './AddEvent.css';

const AddEvent = () => (
  <Link to="/add" className="event-add">
    Add Event
  </Link>
);

export default AddEvent;
