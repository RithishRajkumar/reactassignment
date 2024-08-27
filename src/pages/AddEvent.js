import React, { useState } from 'react';
import EventForm from '../components/EventForm';

function AddEvent() {
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem('events')) || []);

  const addEvent = (event) => {
    const updatedEvents = [...events, event];
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  return (
    <div className="card p-4">
      <h2 className="card-title">Add Event</h2>
      <EventForm onSubmit={addEvent} />
    </div>
  );
}

export default AddEvent;
