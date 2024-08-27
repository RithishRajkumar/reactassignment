import React from 'react';

function EventList({ events = [] }) {
  if (events.length === 0) {
    return <p className="text-muted">No events available.</p>;
  }

  return (
    <div className="list-group">
      {events.map((event, index) => (
        <div key={index} className="list-group-item">
          <h5 className="mb-1">{event.title}</h5>
          <p className="mb-1">{event.date}</p>
          <small>{event.description}</small>
        </div>
      ))}
    </div>
  );
}

export default EventList;
