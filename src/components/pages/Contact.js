import React from 'react';

export default function Contact() {
  return (
    <div className="container w-75 border-secondary-subtle">
      <form>
        <fieldset>
          <legend>Contact Me</legend>
          <div class="form-group">
            <label for="contactName" class="form-label mt-4">Name:</label>
            <input type="text" class="form-control" id="contactName" placeholder="Name"></input>
          </div>
          <div class="form-group">
            <label for="contactEmail" class="form-label mt-4">Email address:</label>
            <input type="email" class="form-control" id="contactEmail1" aria-describedby="emailHelp" placeholder="Enter email address"></input>
          </div>
          <div class="form-group">
            <label for="contactMessage" class="form-label mt-4">Message:</label>
            <textarea class="form-control" id="contactMessage" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-secondary">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
