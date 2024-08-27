import React, { useState } from 'react';

function EventForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, date, description });
    setTitle('');
    setDate('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Title:</label>
        <input 
          type="text" 
          className="form-control"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Date:</label>
        <input 
          type="date" 
          className="form-control"
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description:</label>
        <textarea 
          className="form-control"
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Add Event</button>
    </form>
  );
}

export default EventForm;
