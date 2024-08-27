import React from 'react';
import EventList from '../components/EventList';

function ViewEvents() {
  const storedEvents = JSON.parse(localStorage.getItem('events')) || [];

  return (
    <div>
      <h2 className="mb-4">View Events</h2>
      <EventList events={storedEvents} />
    </div>
  );
}

export default ViewEvents;
